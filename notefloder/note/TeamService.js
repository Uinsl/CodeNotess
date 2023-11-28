/*
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
using static NPOI.HSSF.Util.HSSFColor;
using NPOI.SS.Formula.Functions;
using Spware.Storage;
using FreeSql;
using NPOI.POIFS.Crypt.Dsig;

namespace Spware.Core.Services.Aio.Basic;

/// <summary>
/// 银行账户表 basic_team
/// </summary>
public interface ITeamService : IService
{

    /// <summary>
    /// face_id
    /// </summary>
    /// <param name="id"></param>
    /// <returns></returns>
    Task<basic_team> Get(long id);

    /// <summary>
    /// 获取全部列表
    /// </summary>
    /// <returns></returns>
    Task<IList<basic_team>> GetList();

    /// <summary>
    /// 根据批量获取列表
    /// </summary>
    /// <param name="idArr"></param>
    /// <returns></returns>
    Task<IList<basic_team>> GetList(long[] idArr);

    /// <summary>
    /// 创建
    /// </summary>
    /// <param name="model"></param>
    /// <returns></returns>
    Task<ApiResult<basic_team>> Create(CreateTeamModel model);

    /// <summary>
    /// 删除
    /// </summary>
    /// <param name="idArr"></param>
    /// <returns></returns>
    Task<ApiResult<basic_team[]>> Delete(params long[] idArr);

    /// <summary>
    /// 更新
    /// </summary>
    /// <param name="model"></param>
    /// <returns></returns>
    Task<ApiResult> Update(UpdateTeamModel model);

}

 
public class TeamService : ITeamService
{
    private readonly IDbConnectionFactory _factory;

    public TeamService(IDbConnectionFactory factory)
    {
        _factory = factory;
    }
  
    public async Task<basic_team> Get(long id)
    {

        var fSql = _factory.FreeSql;
        return await fSql.Select<basic_team>()
                    .Where(q => q.Id == id)
                    .ToOneAsync();
    }

    public async Task<IList<basic_team>> GetList()
    {
        var fSql = _factory.FreeSql;
        return await fSql.Select<basic_team>()
                    .ToListAsync();
    }

    public async Task<IList<basic_team>> GetList(long[] idArr)
    {

        var fSql = _factory.FreeSql;
        return await fSql.Select<basic_team>()
                    .Where(a =>idArr.Contains(a.Id))
                    .ToListAsync();
    }


    public async Task<ApiResult<basic_team>> Create(CreateTeamModel model)
    {
        var time = DateTime.Now;

        var entity = new basic_team
        {
            Id = IdGenerator.GenId(),
            ctime = time,
            utime = time,
            cuid_id = model.cuid_id,
            root = model.root,
            code = model.code,
            name = model.name,
            find = model.find,
            view = model.view,
            text = model.text,
            rank = model.rank,
            base_level = model.base_level,
            same = model.same,
            team_some = model.team_some,
            mark = model.mark,
            kind = model.kind,
            area = model.area,
            core = model.core,
            fore = model.fore,
            nore = model.nore,
            fact = model.fact,
            site = model.site,
            tele = model.tele,
            faxa = model.faxa
        };

        await _factory.FreeSql.Insert<basic_team>(entity).ExecuteAffrowsAsync();

        return ApiResult.Return(entity);

    }


    public async Task<ApiResult<basic_team[]>> Delete(params long[] idArr)
    {
        
        var entities = await GetList(idArr);

        if (entities.IsEmpty())
        {
            return ApiResult.Error<basic_team[]>("没有查询到数据");
        }
        //
        var idList = entities.Select(w => w.Id).ToArray();

        //删除
        var fSql = _factory.FreeSql;
        await fSql.Delete<basic_team>().Where(q => idList.Contains(q.Id)).ExecuteAffrowsAsync();

        return ApiResult.Return(entities.ToArray());
        
    }

    public async Task<ApiResult> Update(UpdateTeamModel model)
    {

        var entity = await Get(model.id);
        if (entity == null)
        {
            return ApiResult.Error("没有查询到数据");
        }

        var time = DateTime.Now;

        var fSql = _factory.FreeSql;
     
        await fSql.Update<basic_team>().SetDto(new
        {

            cuid_id = model.cuid_id,
            root = model.root,
            code = model.code,
            name = model.name,
            find = model.find,
            view = model.view,
            text = model.text,
            rank = model.rank,
            base_level = model.base_level,
            same = model.same,
            team_some = model.team_some,
            mark = model.mark,
            kind = model.kind,
            area = model.area,
            core = model.core,
            fore = model.fore,
            nore = model.nore,
            fact = model.fact,
            site = model.site,
            tele = model.tele,
            faxa = model.faxa,
            utime = time
        }).Where(q => q.Id == model.id).ExecuteAffrowsAsync();

        return ApiResult.Return(entity);
    }

}









*/