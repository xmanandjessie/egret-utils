class Message extends egret.DisplayObjectContainer 
{
	private txtStr:egret.TextField;
	private bg:egret.Bitmap;

	public constructor() 
	{
		super();

		this.bg = Global.createBitmapByName("message_bg_png");
		this.bg.y = -10;
		this.addChild(this.bg);

		this.txtStr = new egret.TextField();
		this.txtStr.textColor = 0xFE3E55;
		this.txtStr.width = StageUtils.SW;
		this.txtStr.textAlign = egret.HorizontalAlign.CENTER;
		this.addChild(this.txtStr);
	}

	public show(str):void
	{
		this.txtStr.text = str;
		this.bg.width = this.txtStr.textWidth + 50;
		this.bg.height = this.txtStr.textHeight + 20;
		this.bg.x = StageUtils.SW - this.bg.width >> 1;
		this.y = StageUtils.SH >> 1;
		this.alpha = 1;
		egret.Tween.get(this).wait(1000).to({y:this.y-100,alpha:0},1000,egret.Ease.quadIn).call(this.tweenEnd,this);
	}

	private tweenEnd():void
	{
		if(this.parent)
		{
			this.parent.removeChild(this);
			Message.pool.push(this);
		}
	}

	private static pool = [];
	public static show(str):void
	{
		var item;
		if(Message.pool.length > 0)
		{
			item = Message.pool.pop();
		}else
		{
			item = new Message();
		}
		if(item)
		{
			item.show(str);
			UIManager.instance.topLayer.addChild(item);
		}
	}
}