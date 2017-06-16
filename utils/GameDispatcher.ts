class GameDispatcher extends egret.EventDispatcher 
{
	public constructor() 
	{
		super();
	}

	private static _instance:GameDispatcher;

	public static get instance():GameDispatcher
	{
		if(!GameDispatcher._instance)
		{
			GameDispatcher._instance = new GameDispatcher();
		}
		return GameDispatcher._instance;
	}
}