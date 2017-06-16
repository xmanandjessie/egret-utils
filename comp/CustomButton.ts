class CustomButton extends egret.DisplayObjectContainer
{
	public bg:egret.Bitmap;
	private label:egret.TextField;

	public constructor(url,w=0,h=0) 
	{
		super();
		this.bg = Global.createBitmapByName(url);
		if(w)
		{
			this.bg.width = w;
		}
		if(h)
		{
			this.bg.height = h;
		}
		this.addChild(this.bg);

		this.label = new egret.TextField();
		this.label.fontFamily = "微软雅黑";
		this.label.size = 40;
		this.label.textColor = 0xffffff;
		// this.label.bold = true;
		// this.label.stroke = 1;
		this.label.width = this.bg.width;
		this.label.height = this.bg.height - 5;
		this.label.textAlign = egret.HorizontalAlign.CENTER;
		this.label.verticalAlign = egret.VerticalAlign.MIDDLE;
		this.addChild(this.label);

		this.touchEnabled = true;
		Global.setBut(this);
	}

	public set text(val)
	{
		this.label.text = val;
	}

	public get text():string
	{
		return this.label.text;
	}

	public set enabled(bl)
	{
		if(bl)
		{
			this.alpha = 1;
			this.touchEnabled = true;
		}else
		{
			this.alpha = 0.68;
			this.touchEnabled = false;
		}
	}
}