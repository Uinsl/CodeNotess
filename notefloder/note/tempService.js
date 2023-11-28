using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.IdentityModel.Tokens;
using Spware.Core.Privacy;
using Spware.Core.Services.Organ;
using Spware.DataFormat;
using Spware.Entities;
using Spware.Framework.GeneratorId;
using Spware.Framework.Web;
using Spware.Kit;
using Spware.Kit.Model;
using Spware.Kit.Pools;
using Spware.Rdbms;
using Spware.Rdbms.Dapper;
using Spware.Rdbms.Legacy;
using static NPOI.HSSF.Util.HSSFColor;

namespace Spware.Core.Services.Aio.Basic;

/// <summary>
/// 银行账户表 basic_item
/// </summary>
public interface IItemService : IService
{

    /// <summary>
    /// id
    /// </summary>
    /// <param name="id"></param>
    /// <returns></returns>
    Task<basic_item> Get(long id);

    /// <summary>
    /// 获取全部列表
    /// </summary>
    /// <returns></returns>
    Task<IList<basic_item>> GetList();

    /// <summary>
    /// 根据id批量获取列表
    /// </summary>
    /// <param name="idArr"></param>
    /// <returns></returns>
    Task<IList<basic_item>> GetList(long[] idArr);

    /// <summary>
    /// 创建
    /// </summary>
    /// <param name="model"></param>
    /// <returns></returns>
    Task<ApiResult<basic_item>> Create(CreateItemModel model);

    /// <summary>
    /// 删除
    /// </summary>
    /// <param name="idArr"></param>
    /// <returns></returns>
    //Task<ApiResult<basic_item[]>> Delete(params long[] idArr);

    /// <summary>
    /// 更新
    /// </summary>
    /// <param name="model"></param>
    /// <returns></returns>
    //Task<ApiResult> Update(UpdateItemModel model);


    /// <summary>
    /// 搜索
    /// </summary>
    /// <param name="condition"></param>
    /// <param name="pagedAble"></param>
    /// <returns></returns>
    //Task<DataResult> Search(BankCondition condition, bool pagedAble = true);

}

 
public class ItemService : IItemService
{
    private readonly IDbConnectionFactory _factory;
    private readonly IDataFormatService _dataFormatService;
    private readonly IPrivacyService _privacyService;
    private readonly ITeamService _teamService;
    private readonly IRoomService _roomService;

    public ItemService(IDbConnectionFactory factory,
        IDataFormatService dataFormatService,
        IPrivacyService privacyService,
        ITeamService teamService,
        IRoomService roomService)
    {
        _factory = factory;
        _dataFormatService = dataFormatService;
        //_privacyService = privacyService;
        //_teamService = teamService;
        _roomService = roomService;
    }

    // 
    public async Task<basic_item> Get(long id)
    {
        using var conn = _factory.Open();
        return await conn.SingleAsync<basic_item>(q => q.Id == id);
    }

    public async Task<IList<basic_item>> GetList()
    {
        using var conn = _factory.Open();
        return await conn.SelectAsync<basic_item>();
    }

    public async Task<IList<basic_item>> GetList(long[] idArr)
    {
        using var conn = _factory.Open();
        return await conn.SelectAsync<basic_item>(w => Sql.In(w.Id, idArr));
    }


    public async Task<ApiResult<basic_item>> Create(CreateItemModel model)
    {

        var time = DateTime.Now;

        var entity = new basic_item
        {
            Id = IdGenerator.GenId(),
            ctime = time,
            utime = time,
            team_id = model.team_id,
            no = model.no,
            name = model.name,
            types = model.types,
            bank_account = model.bank_account,
            open_bank = model.open_bank,
            open_zone = model.open_zone,
            open_city = model.open_city,
            cost = model.cost ?? 0,
            live = model.live ?? 0,
            init = model.init ?? 0,
            mint = model.mint,
            face = model.face
        };

        using var conn = _factory.Open();

        await conn.InsertAsync(entity);

        return ApiResult.Return(entity);
    }

    /*
    public async Task<ApiResult<basic_item[]>> Delete(params long[] idArr)
    {
        
        var entities = await GetList(idArr);

        if (entities.IsEmpty())
        {
            return ApiResult.Error<basic_item[]>("没有查询到数据");
        }

        //
        var idList = entities.Select(w => w.Id).ToArray();

        using var conn = _factory.Open();

        //删除
        await conn.DeleteAsync<basic_item>(q => Sql.In(q.Id, idList));

        return ApiResult.Return(entities.ToArray());
        
    }*/

    /*
    public async Task<ApiResult> Update(UpdateBankModel model)
    {

        var entity = await Get(model.id);
        if (entity == null)
        {
            return ApiResult.Error("没有查询到数据");
        }

        var time = DateTime.Now;

        using var conn = _factory.Open();

        await conn.UpdateAsync<basic_item>(new
        {
            team_id = model.team_id,
            no = model.no,
            name = model.name,
            types = model.types,
            bank_account = model.bank_account,
            open_bank = model.open_bank,
            open_zone = model.open_zone,
            open_city = model.open_city,
            cost = model.cost ?? 0,
            live = model.live ?? 0,
            init = model.init ?? 0,
            mint = model.mint,
            utime = time
        }, q => q.Id == model.id);

        return ApiResult.Return(entity);
    }*/


}
