class PopView extends egret.DisplayObjectContainer 
{
	public data:any;
	public constructor() 
	{
		super();
	}

	public show():void
	{
		var bg=new egret.Shape()
      
        bg.graphics.beginFill(0xf9f9f9,0.5);
        bg.graphics.drawRect(0,0,StageUtils.stage.stageWidth,StageUtils.stage.stageHeight);
        bg.graphics.endFill();

        // this.view.scaleY = Main.scale;
        // this.view.x=600;
        // this.view.y=320;
        
        this.addChildAt(bg,0);
        bg.alpha=0;
        Global.fadeIn(bg);

		UIManager.instance.popLayer.addChild(this);
		this.touchEnabled = true;
	}

	public hide():void
	{
		UIManager.instance.popLayer.removeChild(this);
	}

	public setData(data:any = null):void
	{
		this.data = data;
	}
}