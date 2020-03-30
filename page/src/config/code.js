export default `$(document).ready(function() {
  $(window).scrollMonitor
  (
    {
      triggers: [0,10,20,30,40,50,60,70,80,90,100],
      oneShot: false,
      onTriggerPoint: function(e)
      {
        console.log('window scroll shot', e);
        $('#frPosition').html(e.toString());
      }
    }
  );
});
`;