(function(e){e.fn.highlightToday=function(t){var n=new Date,r="0"+n.getDate(),i="0"+(n.getMonth()+1),s=n.getFullYear(),o=s+"-"+i.slice(-2)+"-"+r.slice(-2),u=e(".style_Today",this),a=u.attr("data-cal-date");if(typeof a==="undefined"||o!==a){u.removeClass("style_Today").addClass("style_Day");e('.style_Day[data-cal-date="'+o+'"]',this).addClass("style_Today").removeClass("style_Day");if(t==="show_today"){if(e(".style_Today",this).length===0){if(o>a){e(".nextic",this).click()}else{e(".backic",this).click()}}}}return this}})(jQuery)