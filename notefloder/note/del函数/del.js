/*
    public async Task<ApiResult<basic_bank[]>> Delete(params long[] idArr)
    {
        // face_id
        // 通过GetList(idArr) 获取 匹配条件的 每一条在数据库的数据
        var entities = await GetList(idArr);

        if (entities.IsEmpty())
        {
            return ApiResult.Error<basic_bank[]>("没有查询到数据");
        }

        // 把这批数据的id拿出来，并ToArray()排序
        var idList = entities.Select(w => w.Id).ToArray();

        // var errResult = ApiResult.Error<basic_bank[]>((entities.Count > 1 ? "有已经使用的会议室" : "会议室已经使用") + "，不允许删除");

        using var conn = _factory.Open();

        //删除 ，找到id = idList 的数据库数据，并删除
        await conn.DeleteAsync<basic_bank>(q => Sql.In(q.Id, idList));

        return ApiResult.Return(entities.ToArray());
        
    }

