class PopManager 
{
	// private static _instance:PopManager;

	// public static get instance():PopManager
	// {
	// 	if(!PopManager._instance)
	// 	{
	// 		PopManager._instance = new PopManager();
	// 	}
	// 	return PopManager._instance;
	// }

	public constructor()
	{

	}

	public static popDic:any = {};

	public static showPop(pop:string,data = null):void
	{
		var view = PopManager.popDic[pop];
		if(view)
		{
			view.setData(data);
		}else
		{
			view = eval("new "+pop+"()");
			if(view)
			{
				view.setData(data);
			}
			PopManager.popDic[pop] = view;
		}
		view.show();
	}

	public static hidePop(pop:string):void
	{
		var view = PopManager.popDic[pop];
		if(view)
		{
			view.hide();
			delete PopManager.popDic[pop];
		}else
		{
			console.log(pop+":不存在");
		}
	}
}