class AudioManager 
{
	public constructor() 
	{

	}

	public static playEffect(url):void
	{
		var audio:egret.Sound = RES.getRes(url);
		audio.play(0,1);
	}

}