using System.ComponentModel.DataAnnotations;
using Spware.Common.Validator;
using Xunit.Sdk;
namespace Spware.Core.Services.Aio.Basic;

public class CreateRuleModel
{
    /// <summary>
    /// 单位GUID
    /// </summary>
    [Required(ErrorMessage = "单位Id不能为空")]
    [NonZero]
    public long team_id { get; set; } = default!;

    /// <summary>
    /// 编码类别
    /// </summary>
    [Required(ErrorMessage = "编码类别不能为空")]
    [StringLength(20)]
    public string ware { get; set; } = string.Empty;

    /// <summary>
    /// 启用年份
    /// </summary>
    [Required(ErrorMessage = "启用年份不能为空")]
    [StringLength(10)]
    public string year { get; set; } = string.Empty;

    /// <summary>
    /// 上级编码
    /// </summary>
    [Required(ErrorMessage = "上级编码不能为空")]
    [StringLength(30)]
    public string root { get; set; } = string.Empty;

    /// <summary>
    /// 类别编码
    /// </summary>
    [Required(ErrorMessage = "类别编码不能为空")]
    [StringLength(30)]
    public string code { get; set; } = string.Empty;

    /// <summary>
    /// 类别名称
    /// </summary>
    [Required(ErrorMessage = "类别名称不能为空")]
    [StringLength(80)]
    public string name { get; set; } = string.Empty;

    /// <summary>
    /// 拼音码
    /// </summary>
    [Required(ErrorMessage = "拼音码不能为空")]
    [StringLength(80)]
    public string find { get; set; } = string.Empty;

    /// <summary>
    /// 类别长码
    /// </summary>
    [Required(ErrorMessage = "类别长码不能为空")]
    [StringLength(60)]
    public string view { get; set; } = string.Empty;

    /// <summary>
    /// 类别长名
    /// </summary>
    [Required(ErrorMessage = "类别长名不能为空")]
    [StringLength(800)]
    public string text { get; set; } = string.Empty;

    /// <summary>
    /// 类别级别
    /// </summary>
    [Column(Name = "rank", IsNullable = false)]
    public int rank { get; set; }

    /// <summary>
    /// 是否是明细级
    /// </summary>
    [Column(Name = "base_level", IsNullable = false)]
    public bool base_level { get; set; }

    /// <summary>
    /// 借贷方向;（账务:借方/贷方/自动）
    /// </summary>
    [Column(Name = "mark", IsNullable = false, StringLength = 20)]
    public string mark { get; set; } = string.Empty;

    /// <summary>
    /// 辅助分类;（用作分项核算：Q数量/B银行/D往来/I分项/M部门/W员工）
    /// </summary>
    [Column(Name = "kind", IsNullable = false, StringLength = 60)]
    public string kind { get; set; } = string.Empty;

    /// <summary>
    /// 要素分类;（资产、负债等）
    /// </summary>
    [Column(Name = "tick", IsNullable = false, StringLength = 20)]
    public string tick { get; set; } = string.Empty;

    /// <summary>
    /// 会计体系;（财务会计、预算会计等）
    /// </summary>
    [Column(Name = "bind", IsNullable = false, StringLength = 20)]
    public string bind { get; set; } = string.Empty;

    /// <summary>
    /// 账册格式;（用作账册格式：总分类/三栏式/多栏式/数量金额式）
    /// </summary>
    [Column(Name = "book", IsNullable = false, StringLength = 60)]
    public string book { get; set; } = string.Empty;

    /// <summary>
    /// 科目说明
    /// </summary>
    [Column(Name = "note", IsNullable = false, StringLength = -2)]
    public string note { get; set; } = string.Empty;


}