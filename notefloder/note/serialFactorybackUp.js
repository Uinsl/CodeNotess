/*

var affected = await fSql.Ado.QuerySingleAsync<int>(@"
INSERT INTO serialno (mark,fore,data) VALUES (@mark,@fore,@data)
ON CONFLICT (mark,fore) DO NOTHING;", new { mark, fore, data });

using System;
using System.Threading.Tasks;
using Spware.Entities;
using Spware.Framework;
using Spware.Rdbms;

namespace Spware.Core
{
    /// <summary>
    /// 流水号生成
    /// </summary>
    public class SerialFactory
    {
        private readonly IDbConnectionFactory _dbFactory;

        public SerialFactory(IDbConnectionFactory dbFactory)
        {
            _dbFactory = dbFactory;
        }

        /// <summary>
        /// 获取流水号
        /// </summary>
        /// <param name="mark">主键也是多个流水号的类别区分 </param>
        /// <param name="len">长度</param>
        /// <param name="inc">递增号</param>
        /// <returns>流水号</returns>
        public Task<string> GetSerialAsync(string mark, int len = 0, int inc = 1)
        {
            return GetSerialAsync(mark, string.Empty, len, inc);
        }

        /// <summary>
        /// 获取流水号
        /// </summary>
        /// <param name="mark">主键也是多个流水号的类别区分 </param>
        /// <param name="fore">前缀</param>
        /// <param name="len">长度</param>
        /// <param name="inc">递增号</param>
        /// <returns>流水号</returns>
        public async Task<string> GetSerialAsync(string mark, string fore, int len = 0, int inc = 1)
        {
            //using var conn = _dbFactory.Open();
            var fSql = _dbFactory.FreeSql;
            long data;
            const string INSERTSQL = "INSERT INTO serialno(mark, fore, data) VALUES(@mark, @fore, @data)ON CONFLICT(mark, fore) DO NOTHING";

            try
            {
                //var entity = await conn.SingleAsync<SerialNo>(q => q.mark == mark && q.fore == fore);
                var entity = fSql.Select<SerialNo>()
                            .Where(q => q.mark == mark && q.fore == fore)
                            .ToOneAsync();

                //using var trans = conn.OpenTransaction();
                using var uow = fSql.CreateUnitOfWork();

                if (entity == null)
                {
                    data = inc;

                    if ((await fSql.Ado.QuerySingleAsync<int>(INSERTSQL, new { mark, fore, data })) <= 0)
                    {
                        //await conn.UpdateAddAsync(() => new SerialNo
                        await uow.Orm.Update<SerialNo>().SetDto(new
                        {
                            data = inc

                        }).Where(q => q.mark == mark && q.fore == fore).ExecuteAffrowsAsync();

                        // entity = await conn.SingleAsync<SerialNo>(q => q.mark == mark && q.fore == fore); //?
                        // data = entity.data;
                        data = (await fSql.Select<SerialNo>().Where(q => q.mark == mark && q.fore == fore).ToOneAsync()).data;
                        
                    }
                }
                else
                {
                    //await conn.UpdateAddAsync(() => new SerialNo
                    await uow.Orm.Update<SerialNo>().SetDto(new
                    {
                        data = inc 
                    }).Where(q => q.mark == mark && q.fore == fore).ExecuteAffrowsAsync(); ;

                    //entity = await conn.SingleAsync<SerialNo>(q => q.mark == mark && q.fore == fore);
                    data = (await fSql.Select<SerialNo>().Where(q => q.mark == mark && q.fore == fore).ToOneAsync()).data;
                }

                uow.Commit();
            }
            catch (Exception ex)
            {
                throw new Exception("生成流水号异常，请检查。", ex);
            }

            var ret = data.ToString();

            ret = len == 0 ? ret : (fore + ret.PadLeft(len, '0'));

            return ret;
        }

        /// <summary>
        /// 获取流水号-自定义编号
        /// </summary>
        /// <param name="mark">主键也是多个流水号的类别区分 </param>
        /// <param name="fore">前缀</param>
        /// <param name="auto">自定义编号</param>
        /// <param name="len">长度</param>
        /// <param name="inc">递增号</param>
        /// <returns>流水号</returns>
        public async Task<string> GetSerialCustomAsync(string mark, string fore, int auto, int len = 0, int inc = 1)
        {
            var data = 0L;

            const string INSERTSQL = "INSERT INTO serialno (mark,fore,data) VALUES (@mark,@fore,@data) ON CONFLICT(mark, fore) DO NOTHING";

            //using var conn = _dbFactory.Open();
            var fSql = _dbFactory.FreeSql;

            try
            {
                //var entity = await conn.SingleAsync<SerialNo>(q => q.mark == mark && q.fore == fore);
                var entity = await fSql.Select<SerialNo>()
                            .Where(q => q.mark == mark && q.fore == fore)
                            .ToOneAsync();
 
                data = entity?.data ?? 0;

                //using var trans = conn.OpenTransaction();
                using var uow = fSql.CreateUnitOfWork();

                if (data == 0)
                {
                    data = auto > 0 ? auto + inc : inc;

                    //if (await conn.ExecuteSqlAsync(INSERTSQL, new { mark, fore, data }) <= 0)
                    if((await fSql.Ado.QuerySingleAsync<int>(INSERTSQL, new { mark, fore, data })<=0))
                    {
                        //await conn.UpdateAddAsync(() => new SerialNo
                        await uow.Orm.Update<SerialNo>().SetDto(new
                        {
                            data = inc
                        }).Where(q => q.mark == mark && q.fore == fore).ExecuteAffrowsAsync();

                        //entity = await conn.SingleAsync<SerialNo>(q => q.mark == mark && q.fore == fore);
                        data = (await fSql.Select<SerialNo>().Where(q => q.mark == mark && q.fore == fore).ToOneAsync()).data;
                    }
                }
                else
                {
                    //await conn.UpdateAddAsync(() => new SerialNo
                    await uow.Orm.Update<SerialNo>().SetDto(new
                    {
                        data = inc
                    }).Where(q => q.mark == mark && q.fore == fore).ExecuteAffrowsAsync();

                    //entity = await conn.SingleAsync<SerialNo>(q => q.mark == mark && q.fore == fore);
                    data = (await fSql.Select<SerialNo>().Where(q => q.mark == mark && q.fore == fore).ToOneAsync()).data;
                }

                uow.Commit();
            }
            catch (Exception ex)
            {
                throw new SystemException("生成流水号异常，请检查。", ex);
            }

            var ret = data.ToString();

            ret = len == 0 ? ret : (fore + ret.PadLeft(len, '0'));

            return ret;
        }
    }
}