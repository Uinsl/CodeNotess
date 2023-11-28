using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Spware.Api.Aio.Basic.Models.Hall;
using Spware.Common.ComponentModel;
using Spware.Core;
using Spware.Core.Configurations;
using Spware.Core.Services.Aio.Basic;
using Spware.Core.Services.Organ;
using Spware.DataFormat.Excel;
using Spware.DataFormat.Print.Pdf;
using Spware.DataFormat.Print.Pdf.Layout;
using Spware.Framework.Web;
using Spware.Identity;
using Spware.Identity.Auth;
using Spware.Identity.Permissions;
using Spware.Kit;
using Spware.Kit.Json;
using Spware.Logger;
using Spware.Web.Common;
using Spware.Web.Common.Mvc;
using Swashbuckle.AspNetCore.Annotations;

namespace Spware.Api.Aio.Basic.Controllers;

/// <summary>
/// 银行账户表
/// </summary>
[Auth(AuthRole.AIO)]
[SwaggerTag("预算项目表")]
[Area("Item")]
[Route("[area]/basic/[controller]/[action]")]
[Produces("application/json")]
[ApiExplorerSettings(GroupName = DocsConstant.INSIDE_MEETBASIC)]
public class ItemController : BaseApiController
{
    private readonly ILogger _logger;
    private readonly IOptionsMonitor<AppOptions> _appOptions;
    private readonly ILogService _logService;
    private readonly ITeamService _teamService;
    private readonly IUserService _userService;
    private readonly Spware.Core.Services.Aio.Basic.IItemService _roomService;

    public ItemController(
        ILogger<BankController> logger,
        IOptionsMonitor<AppOptions> appOptions,
        ILogService logService,
        ITeamService teamService,
        IUserService userService,
        Spware.Core.Services.Aio.Basic.IItemService roomService)
    {
        _logger = logger;
        _appOptions = appOptions;
        _logService = logService;
        //_teamService = teamService;
        //_userService = userService;
        _roomService = roomService;
    }


    /*
    /// <summary>
    /// 获取所有会议室列表
    /// </summary>
    /// <returns></returns>
    [HttpGet]
    [ProducesResponseType(typeof(ApiResult<IEnumerable<SelectVm>>), 200)]
    public async Task<ApiResult> GetList()
    {
        var list = await _roomService.GetList();
        return ApiResult.Return(list.Select(s => new SelectVm(s.Id.ToString(), s.name)));
    }*/

    /*
    /// <summary>
    /// 获取会议室
    /// </summary>
    /// <param name="id"></param>
    /// <returns></returns>
    [HttpGet]
    [Perm(MP.EDIT, nameof(AioPerm.AIO_ROOM))]
    [ProducesResponseType(typeof(ApiResult<Spware.Core.Services.Aio.Basic.UpdateBankModel>), 200)]
    public async Task<ApiResult> Get([FromQuery] long id)
    {
        if (id <= 0)
        {
            return ApiResult.Error("参数错误");
        }

        var entity = await _roomService.Get(id);
        if (entity == null) return ApiResult.Error("查询不到数据");

        var result = new Spware.Core.Services.Aio.Basic.UpdateBankModel
        {
            id = entity.Id,
            team_id = entity.team_id,
            no = entity.no,
            name = entity.name,
            types = entity.types,
            bank_account = entity.bank_account,
            open_bank = entity.open_bank,
            open_zone = entity.open_zone,
            open_city = entity.open_city,
            cost = entity.cost,
            live = entity.live,
            init = entity.init,
            mint = entity.mint,
            face = entity.face
        };

        return ApiResult.Return(result);
    }*/


    /// <summary>
    /// 新增
    /// </summary>
    /// <param name="model"></param>
    /// <returns></returns>
    [HttpPost]
    [Perm(MP.ADD, nameof(AioPerm.AIO_ROOM))]
    [ProducesResponseType(typeof(ApiResult), 200)]
    public async Task<ApiResult> Create(Spware.Core.Services.Aio.Basic.CreateBankModel model)
    {
        if (!ModelState.IsValid)
        {
            return ModelState.ToApiResult();
        }

        var result = await _roomService.Create(model);
        if (result)
        {
            var logModel = this.GetLogModel();
            logModel.Xid = new[] { result.Result.Id };
            logModel.Mark = "bank新增";
            logModel.Contnet = model.ToJson();
            await _logService.LogAsync(logModel);

            return ApiResult.Return(result.Result.Id);
        }

        return result;
    }


    /*
    /// <summary>
    /// 批量删除
    /// </summary>
    /// <param name="model"></param>
    /// <returns></returns>
    [HttpPost]
    [Perm(MP.DELE, nameof(AioPerm.AIO_ROOM))]
    [ProducesResponseType(typeof(ApiResult), 200)]
    public async Task<ApiResult> Delete([FromBody] LongBatchFm model)
    {
        // 批量删除,id等于"list": ["1","2","4"....]
        if (!ModelState.IsValid)
        {
            return ModelState.ToApiResult();
        }

        var idArr = model.list.ToArray();

        var result = await _roomService.Delete(idArr);

        if (result)
        {
            var logModel = this.GetLogModel();
            logModel.Xid = idArr;
            logModel.Mark = "bank删除";
            logModel.Contnet = model.ToJson();
            await _logService.LogAsync(logModel);
        }

        return result;

    }*/


    /*
    /// <summary>
    /// 更新
    /// </summary>
    /// <param name="model"></param>
    /// <returns></returns>
    [HttpPost]
    [Perm(MP.EDIT, nameof(AioPerm.AIO_ROOM))]
    [ProducesResponseType(typeof(ApiResult), 200)]
    public async Task<ApiResult> Update(Spware.Core.Services.Aio.Basic.UpdateBankModel model)
    {
        if (!ModelState.IsValid)
        {
            return ModelState.ToApiResult();
        }

        var result = await _roomService.Update(model);
        if (result)
        {
            var logModel = this.GetLogModel();
            logModel.Xid = new[] { model.id };
            logModel.Mark = "bank修改";
            logModel.Contnet = model.ToJson();
            await _logService.LogAsync(logModel);
        }

        return result;
    }*/


}
