/*
编码 code
代码 no

// basic_bond 特色字段 base 不可用，改为bbase
// basic_item 特色字段 base 不可用，改为bbase

见表字段顺序建议：
id
ctime
utime 

stop
team_id


//--------------
表：
bank
bill 
bond 都把bool类型隐藏，没有暴露出来修改

item:
 暴露 stop bbase 
 team_id -> temd_id 修改

 rank 字段              rank = model.rank ?? 0,
 1、null 1
 2、0 最小值1
int? a=0;
if(a==null){

Console.WriteLine("Hello World!");
}else{
Console.WriteLine("sss1!");

} = 》 sss1

int? a=null;
if(a>0){

Console.WriteLine("Hello World!");
}else{
Console.WriteLine("ssssss!");

}

当basic_item.cs ：
rank 字段 int -> int?  ，默认最小值就会变成0
rank = model.rank ?? 0  

所以为什么要加 int？

更新会把rank改成0

stop
base 
标志忽略




从表mint开始修改字段 -> api-docs\pdma.json
base-> base_coin 本位币

pack
base-> base_level 是否是明细级



*/

    /// <summary>
    /// 开户省份
    /// </summary>
    [Required(ErrorMessage = "开户省份不能为空")]
    [StringLength(20)] //
    public string open_zone { get; set; } = default!;

    /// <summary>
    /// 开户城市
    /// </summary>
    //[Required(ErrorMessage = "开户城市不能为空")]
    //[StringLength(20)] 如果没有这句，数据库错误
    // string.Empty;// 数据库中，改字段，值为“”
    // CS entity表的限制作用不大，只用一个实体表的映射
    public string open_city { get; set; } = string.Empty;

    public string tick { get; set; } = string.Empty;
    ==
    public long? item_used { get; set; }

    long？ 是值可控
    string? 是引用可控（string 非栈内存 class 也是）