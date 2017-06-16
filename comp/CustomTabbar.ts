class CustomTabbar extends egret.DisplayObjectContainer
{
	private len;
	private type;
	private gap;

	public constructor(len,type,gap)
	{
		super();

		for(var i = 0;i<len;i++)
		{
			var item = Global.createBitmapByName("tabbar_"+(i+1)+"_2_png");
			item.x = 155 + 140;
			item.y = 115;
			this.addChild(item);
		}

	}
}