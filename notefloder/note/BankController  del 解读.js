/*
namespace Spware.Api.Aio.Basic.Controllers;




/// <summary>
/// 会议室管理
/// </summary>
[Auth(AuthRole.AIO)]
[SwaggerTag("会议室管理")]
[Area("Test")]
[Route("[area]/basic/[controller]/[action]")]
[Produces("application/json")]
[ApiExplorerSettings(GroupName = DocsConstant.INSIDE_MEETBASIC)]
public class BankController : BaseApiController
{
    private readonly ILogger _logger;
    private readonly IOptionsMonitor<AppOptions> _appOptions;
    private readonly ILogService _logService;
    private readonly ITeamService _teamService;
    private readonly IUserService _userService;
    private readonly Spware.Core.Services.Aio.Basic.IBankService _roomService;

    public BankController(
        ILogger<HallController> logger,
        IOptionsMonitor<AppOptions> appOptions,
        ILogService logService,
        ITeamService teamService,
        IUserService userService,
        Spware.Core.Services.Aio.Basic.IBankService roomService)
    {
        _logger = logger;
        _appOptions = appOptions;
        _logService = logService;
        _teamService = teamService;
        _userService = userService;
        _roomService = roomService;
    }


    
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
    }

//      public async Task<ApiResult> Get([FromQuery] long id)
//      参数代表 : http://localhost:5009/api-docs/index.html API接口需要传入的数据
//      有很多种
    public async Task<ApiResult> Create(Spware.Core.Services.Aio.Basic.CreateBankModel model)

//         return ApiResult.Return(result);
// 代表web接口API返回的数据

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

        // table: basic_bank  查询face
        // 查询到多条匹配的数据时，会报错
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
            cost = entity.cost ?? 0,
            live = entity.live ?? 0,
            init = entity.init ?? 0,
            mint = entity.mint,
            face = entity.face
        };

        return ApiResult.Return(result);
    }




    /// <summary>
    /// 新增test1
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
            logModel.Mark = "会议室新增";
            logModel.Contnet = model.ToJson();
            await _logService.LogAsync(logModel);

            return ApiResult.Return(result.Result.Id);
        }

        return result;
    }


    
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
        // 批量删除face等于"list": ["1","2","4"....]
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
            logModel.Mark = "会议室删除";
            logModel.Contnet = model.ToJson();
            await _logService.LogAsync(logModel);
        }

        return result;

    }
    
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
            logModel.Mark = "会议室修改";
            logModel.Contnet = model.ToJson();
            await _logService.LogAsync(logModel);
        }

        return result;
    }








}




















*/