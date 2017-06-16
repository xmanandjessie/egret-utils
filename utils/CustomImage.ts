class CustomImage extends egret.Bitmap
{
	private url:string;

	private isEase:boolean;

	private compFunc:Function;

	private w:number;

	private h:number;

	public constructor(_url,_isEase = true,_compFunc = null) 
	{
		super();
		this.url = _url;
		this.isEase = _isEase;
		this.compFunc = _compFunc;
		this.loadBg();
	}

	private loadBg(): void
    {
		RES.getResByUrl(this.url,this.onLoadComplete,this,RES.ResourceItem.TYPE_IMAGE);
    }

	private onLoadComplete(tex:egret.Texture): void 
    {
        // //获取加载到的纹理对象
		this.texture = tex;

		if(this.isEase)
		{
			this.alpha = 0;
			egret.Tween.get(this).to({ alpha: 1 }, 1000);
		}
		if(this.compFunc)
		{
			this.compFunc();
		}
    }
}