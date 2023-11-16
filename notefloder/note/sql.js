/*

SELECT
	ROW_NUMBER() OVER (ORDER BY a.id ASC) AS idx,
	id,status,name, ip,remark,ctime,utime
FROM 
	public.sign_device a;

a 把sign_device 命名为表a 
a.id = sign_device.id;

SELECT
	ROW_NUMBER() OVER (ORDER BY sign_device.id ASC) AS idx,
	id,status,name, ip,remark,ctime,utime
FROM 
	public.sign_device;




    

*/    