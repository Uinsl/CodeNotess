// 01-lib
// Spware.core
// Entities

using System;
using Spware.Rdbms;
using Spware.Rdbms.DataAnnotations;

#nullable enable

namespace Spware.Entities;
/// <summary>
/// meet_device 设备管理
/// </summary>
[Serializable]
[Alias("meet_device")]
public class meet_device : BaseEntity<long>
{
    /// <summary>
    /// 主键
    /// </summary>
    [Alias("id")]

    [PrimaryKey]
    public override long Id { get; set; }

    /// <summary>
    /// 创建时间
    /// </summary>
    [Alias("ctime")]
    [Default("now()")]
    public DateTime ctime { get; set; }

    /// <summary>
    /// 更新时间
    /// </summary>
    [Alias("utime")]
    [Default("now()")]
    public DateTime utime { get; set; }

    /// <summary>
    /// 设备key
    /// </summary>
    [Alias("no")]
    [Default("''")]
    public string no { get; set; } = default!;

    /// <summary>
    /// 设备名称
    /// </summary>
    [Alias("name")]
    [Default("''")]
    public string name { get; set; } = default!;

    /// <summary>
    /// 设备用途;信息发布、智慧门牌、LED屏
    /// </summary>
    [Alias("kinds")]
    [Default("''")]
    public string kinds { get; set; } = default!;

    /// <summary>
    /// 会议室ID
    /// </summary>
    [Alias("room_id")]
    [Default("0")]
    public long room_id { get; set; }

    /// <summary>
    /// 使用人ID
    /// </summary>
    [Alias("user_id")]
    [Default("0")]
    public long user_id { get; set; }

    /// <summary>
    /// 默认信息模板
    /// </summary>
    [Alias("info_id")]
    [Default("0")]
    public long info_id { get; set; }

    /// <summary>
    /// 设备状态
    /// </summary>
    [Alias("status")]
    [Default("0")]
    public int status { get; set; }

    /// <summary>
    /// IP地址
    /// </summary>
    [Alias("ip")]
    [Default("''")]
    public string ip { get; set; } = default!;

    /// <summary>
    /// 调用地址
    /// </summary>
    [Alias("url")]
    [Default("''")]
    public string url { get; set; } = default!;

    /// <summary>
    /// 分辨率宽度
    /// </summary>
    [Alias("width")]
    [Default("0")]
    public int width { get; set; }

    /// <summary>
    /// 分辨率高度
    /// </summary>
    [Alias("height")]
    [Default("0")]
    public int height { get; set; }

    /// <summary>
    /// 备注
    /// </summary>
    [Alias("remark")]
    [Default("''")]
    public string remark { get; set; } = default!;

}