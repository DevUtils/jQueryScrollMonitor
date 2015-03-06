(function($){

	var defaults =
	{
		triggers       : [0,25,50,75,100],
		onTriggerPoint : null,
		oneShot        : false,
		shots          : [],
		maxShot        : 0,
		lastPercent    : 0,
		lastShot       : -1,
	};

	var objects = [];

	var methods =
	{
		init : function(options)
		{
			var opts = $.extend( {}, defaults, options );

			for(var k in opts.triggers)
			{
				opts.shots[opts.triggers[k]] = false;
			}

			return this.each(function()
			{
				$.fn.scrollMonitor.process($(this), opts);
			});
		},
	};

	$.fn.scrollMonitor = function(methodOrOptions)
	{
		if ( methods[methodOrOptions] )
		{
			return methods[ methodOrOptions ].apply( this, Array.prototype.slice.call( arguments, 1 ));
		}
		else if ( typeof methodOrOptions === 'object' || ! methodOrOptions )
		{
			return methods.init.apply( this, arguments );
		}
		else
		{
			$.error('Method ' + methodOrOptions + ' does not exist on jQuery.scrollMonitor');
		}
	};

	$.fn.scrollMonitor.makeId = function()
	{
		var text = "";
		var possible = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz0123456789";
		var pl = possible.length;
		for(var i = 0; i < 8; i++)
		{
			text += possible.charAt(Math.floor(Math.random() * pl));
		}
		return text;
	};

	$.fn.scrollMonitor.process = function(p_elem, p_options)
	{
		var ids = $.fn.scrollMonitor.makeId();
		while (objects[ids] !== undefined)
		{
			ids = $.fn.scrollMonitor.makeId();
		}
		if (p_elem[0] == window)
		{
			ids = 'window';
		}
		var comp = {};
		comp.element     = p_elem;
		comp.options     = jQuery.extend(true, {}, p_options);
		comp.lastPercent = 0;
		objects[ids] = (comp);
		p_elem.attr('data-scroll-ids', ids).addClass('scroll-monitor');

		if (p_elem[0] == window)
		{
			$(window).bind
			(
				'scroll.scrollMonitor',
				function(e)
				{
					$.fn.scrollMonitor._executeMonitor('window', e);
				}
			);
		}
		else
		{
			$('.scroll-monitor').bind
			(
				'scroll.scrollMonitor',
				function(e)
				{
					$.fn.scrollMonitor._executeMonitor($(this).attr('data-scroll-ids'), e);
				}
			);
		}
	};

	$.fn.scrollMonitor._executeMonitor = function(p_ids, p_event)
	{
		var k;
		var scrollPercent;
		var component = objects[p_ids];
		var array_each;
		var shots = [];

		if (p_ids === 'window')
		{
			scrollPercent = Math.round(100 * $(window).scrollTop() / ($(document).height() - $(window).height()));
		}
		else
		{
			var element = objects[p_ids].element;
			var scrollTop  = element.scrollTop();
			var all_height = element[0].scrollHeight - ( parseInt(element.css('padding-top')) + parseInt(element.css('padding-bottom')) );
			scrollPercent  = (scrollTop) / (all_height - element.height());
			scrollPercent  = Math.round(scrollPercent * 100);
		}

		if (objects[p_ids].options.oneShot)
		{
			if (scrollPercent > objects[p_ids].options.maxShot)
			{
				array_each = objects[p_ids].options.triggers.slice();
				array_each.reverse();
				shots = [];
				for(k in array_each)
				{
					num = array_each[k];
					if (scrollPercent >= num)
					{
						if (!objects[p_ids].options.shots[num])
						{
							objects[p_ids].options.shots[num] = true;
							objects[p_ids].options.maxShot = num;
							shots.push(num);
						}
					}
				}
				shots.reverse();
				for(k in shots)
				{
					objects[p_ids].options.onTriggerPoint(shots[k]);
				}
				if (objects[p_ids].options.shots.indexOf(false) == -1)
				{
					if (p_ids === 'window')
					{
						$(window).unbind('scroll.scrollMonitor');
					}
					else
					{
						objects[p_ids].element.unbind('scroll.scrollMonitor');
					}
				}
			}
		}
		else
		{
			array_each = objects[p_ids].options.triggers.slice();
			array_each.reverse();
			shots = [];
			for(k in array_each)
			{
				num = array_each[k];
				if ( ( (num >= objects[p_ids].lastPercent) && (num <= scrollPercent) ) || ( (num >= scrollPercent) && (num <= objects[p_ids].lastPercent) ) )
				{
					if (objects[p_ids].lastShot != num)
					{
						objects[p_ids].lastPercent = scrollPercent;
						objects[p_ids].lastShot = num;
						objects[p_ids].options.onTriggerPoint(num);
					}
				}
			}
		}
	};

	$(document).trigger('ScrollMonitorReady');

})( jQuery );