class CustomCheckBox extends egret.DisplayObjectContainer
{
	public type;
	public text;
	public select;

	public index;

	public icon:egret.Bitmap;

	public txtContent:egret.TextField;
	
	public constructor(type,str,select = 0) 
	{
		super();
		this.type = type;
		this.text = str;
		this.select = select;
		this.init();
	}

	private init():void
	{
		console.log();
		
		this.icon = Global.createBitmapByName("cbx_"+this.type+"_"+this.select+"_png");
		this.addChild(this.icon);

		this.txtContent = new egret.TextField();
		this.txtContent.x = 50;
		this.txtContent.text = this.text;
		this.addChild(this.txtContent);

		this.touchEnabled = true;

		this.addEventListener(egret.TouchEvent.TOUCH_TAP,this.clickHandler,this);
	}

	private clickHandler():void
	{
		this.change();
		this.dispatchEventWith(egret.Event.CHANGE);
	}

	public setSelect(sel):void
	{
		this.select = sel;
		this.icon.texture = RES.getRes("cbx_"+this.type+"_"+this.select+"_png");
	}

	public change():void
	{
		this.setSelect(this.select == 0?1:0);
	}
}