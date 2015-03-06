$(document).ready(function() {
	
	$(window).scrollMonitor
	(
		{
			oneShot: true,
			onTriggerPoint: function(e)
			{
				console.log('window scroll shot', e);
				$('#lastWindowShot').val('window scroll shot: ' + e);
			}
		}
	);

	$('#divtest').scrollMonitor
	(
		{
			oneShot: false,
			onTriggerPoint: function(e)
			{
				console.log('div element shot', e);
				$('#lastShot').val('div element shot: ' + e);
			}
		}
	);

});