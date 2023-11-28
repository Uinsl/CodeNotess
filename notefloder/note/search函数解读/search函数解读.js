/*
    public async Task<DataResult> Search(HallCondition condition, bool pagedAble = true)
    {
        var dataResult = new DataResult();

        using var listPooledObject = SharedPools.List<string>().Get();
        using var dictPooledObject = SharedPools.Dictionary<string, object>().Get();

        var filterList = listPooledObject.Object;//筛选条件构造
        var param = dictPooledObject.Object; //筛选条件所需参数化

        var cteList = new List<string>();//cte表达式
        var cteJoinList = new List<string>();//cte关联

        //默认排序
        var order = "a.sort";

        if (!condition.team_id.IsEmpty())
        {
            // "    "  WITH teamCTE AS (SELECT unnest('{1,2}'::BIGINT[]) team)
            cteList.Add($"WITH teamCTE AS (SELECT unnest('{{{condition.team_id.ToSqlValues()}}}'::BIGINT[]) team)");

            // "   "   JOIN teamCTE ON a.team_id=teamCTE.team
            cteJoinList.Add("JOIN teamCTE ON a.team_id=teamCTE.team");
        }

        if (!condition.name.IsNullOrEmpty())
        {
            // "a.name LIKE '%@name%'"
            filterList.Add($"a.name LIKE '%@name%'");

            // tu3
            param.Add("name", condition.name);
        }

        
        if (condition.status.HasValue && condition.status.Value >= 0)
        {
            filterList.Add("a.status=@status");
            param.Add("status", condition.status.Value);
            // tu5
        }

        //根据自动构造高级筛选条件
        if (condition.SearchFilter.Count > 0)
        {
            filterList.AddRange(_dataFormatService.GenerateFilterSQL(condition.format, condition.SearchFilter)); 
            // 没加
        }

        if (condition.SearchOrder.Count > 0)
        {
            var orderFields = _dataFormatService.GenerateOrderSQL(condition.format, condition.SearchOrder);
            if (orderFields.IsNotEmpty())
            {
                order = orderFields;
            }
        }

        //生成WHERE语句
        var where = string.Empty;
        if (filterList.Count > 0)
            where = "WHERE " + string.Join(" AND ", filterList);  //tu6

        //数据SQL
        var sql = $@"
{string.Join(",", cteList)}
SELECT
    ROW_NUMBER() OVER (ORDER BY {order}) AS idx,a.id,a.ctime,a.utime,
    a.team_id,a.team_name,a.user_id,a.sort,a.name,a.address,a.types,a.status,a.seats,a.extra,a.sheet,a.times,a.remark,
    u.name user_name,u.mobile_number
FROM
    meet_room a LEFT JOIN organ_user u ON a.user_id=u.user_id
{string.Join(" ", cteJoinList)}
{where}

{(pagedAble ? "LIMIT @pagesize OFFSET @offset" : null)} 
";// tu7


/*
WITH teamCTE AS (SELECT unnest('{1,2}'::BIGINT[]) team)
SELECT
    ROW_NUMBER() OVER (ORDER BY a.sort) AS idx,a.id,a.ctime,a.utime,
    a.team_id,a.team_name,a.user_id,a.sort,a.name,a.address,a.types,a.status,a.seats,a.extra,a.sheet,a.times,a.remark,
    u.name user_name,u.mobile_number
FROM
    meet_room a LEFT JOIN organ_user u ON a.user_id=u.user_id
JOIN teamCTE ON a.team_id=teamCTE.team
WHERE a.name LIKE '%@name%' AND a.status=@status

LIMIT @pagesize OFFSET @offset
*/




/*

        //打开数据连接查询数据
        using var conn = _factory.Open();

        if (pagedAble)
        {
            //需要分页时所需的参数化条件
            param.Add("offset", (condition.Page - 1) * condition.PageSize);
            param.Add("pagesize", condition.PageSize);

            //总行数SQL
            var sqlCount = $@"
{string.Join(",", cteList)}
SELECT
    count(1)
FROM
    meet_room a
{string.Join(" ", cteJoinList)}
{where}";



/*
WITH teamCTE AS (SELECT unnest('{1,2}'::BIGINT[]) team)
SELECT
    count(1)
FROM
    meet_room a
JOIN teamCTE ON a.team_id=teamCTE.team
WHERE a.name LIKE '%@name%' AND a.status=@status

*/

/*
param
name,testname
status,3
offset,0
pagesize,30
*/





/*
            //总记录数
            var count = await conn.QueryFirstOrDefaultAsync<int>(sqlCount, param);
            dataResult.Paged = new PagedList(count, condition.Page - 1, condition.PageSize);
        }

        //查询结果集并转为DataTable
        using var reader = await conn.ExecuteReaderAsync(sql, param);
        dataResult.Data = reader.ConvertDataTableQuietly();

        var privacy = await _privacyService.Privacy();

        //过滤敏感信息
        foreach (DataRow row in dataResult.Data.Rows)
        {
            row["team_name"] = row.DecodeData("team_name");
            row["user_name"] = row.DecodeData("user_name").PrivacyName(privacy);
            row["mobile_number"] = row.DecodeData("mobile_number").PrivacyMobile(privacy);
        }

        return dataResult;
    }

























*/