
function get(url){
	
	function callAjax(url,data,successCallback,errCallback,isAsync,isCache){
	
		if(data){
			data = JSON.stringify(data);
		}
		
		$.ajax({

            cache: isCache,
            type: "GET",
            async: isAsync,
            url: Global.host + url,
            data: data ,
            contentType: "application/json",
            success: successCallback,
            error: errCallback
        });
		
	
	}
	
	function onAjaxSucess(scallback, data, isAsync){
		return{
				err:function(ecallback){
				
					return {
						cache: function(){callAjax(url,data,scallback,ecallback,isAsync,true);},
                        end: function(){callAjax(url,data,scallback,ecallback,isAsync,false);}
					}
				}
		}
	}
	
	return {
		async:{
			for:function(data){
				return{
					success:function(scallback){
						return onAjaxSucess(scallback, data,true);	
					}
				}
			},
			success:function(scallback){
				return onAjaxSucess(scallback,null,true);	
			}
		},
		
		for:function(data){
			return{
				success:function(scallback){
					return onAjaxSucess(scallback, data,false);	
				}
			}
		},
		success:function(scallback){
			return onAjaxSucess(scallback,null,false);	
		}
	}
 
 }
 
 function post(url){
	
	function callAjax(url,data,successCallback,errCallback,isAsync,isCache){
	
		$.ajax({

            cache: isCache,
            type: "POST",
            async: isAsync,
            url: Global.host + url,
            data: JSON.stringify(data),
            contentType: "application/json",
            success: successCallback,
            error: errCallback
        });
		
	
	}
	
	function onAjaxSucess(scallback, data, isAsync){
		return{
				err:function(ecallback){
				
					return {
						cache: function(){callAjax(url,data,scallback,ecallback,isAsync,true);},
                        end: function(){callAjax(url,data,scallback,ecallback,isAsync,false);}
					}
				}
		}
	}
	
	return {
		async:{
			for:function(data){
				return{
					success:function(scallback){
						return onAjaxSucess(scallback, data,true);	
					}
				}
			},
			success:function(scallback){
				return onAjaxSucess(scallback,null,true);	
			}
		},
		
		for:function(data){
			return{
				success:function(scallback){
					return onAjaxSucess(scallback, data,false);	
				}
			}
		},
		success:function(scallback){
			return onAjaxSucess(scallback,null,false);	
		}
	}
 
 }
 
				
