/*! For license information please see lg-plugin-5.js.LICENSE.txt */
(self.webpackChunksakurairo_scripts=self.webpackChunksakurairo_scripts||[]).push([[359],{6220:function(e,t,r){r.r(t);var a=function(){return(a=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var s in t=arguments[r])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e}).apply(this,arguments)},s="lgUpdateSlides",i="lgBeforeSlide",o={pager:!0},n=function(){function e(e,t){return this.core=e,this.$LG=t,this.settings=a(a({},o),this.core.settings),this}return e.prototype.getPagerHtml=function(e){for(var t="",r=0;r<e.length;r++)t+='<span  data-lg-item-id="'+r+'" class="lg-pager-cont"> \n                    <span data-lg-item-id="'+r+'" class="lg-pager"></span>\n                    <div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="'+e[r].thumb+'" /></div>\n                    </span>';return t},e.prototype.init=function(){var e=this;if(this.settings.pager){var t;this.core.$lgComponents.prepend('<div class="lg-pager-outer"></div>');var r=this.core.outer.find(".lg-pager-outer");r.html(this.getPagerHtml(this.core.galleryItems)),r.first().on("click.lg touchend.lg",(function(t){var r=e.$LG(t.target);if(r.hasAttribute("data-lg-item-id")){var a=parseInt(r.attr("data-lg-item-id"));e.core.slide(a,!1,!0,!1)}})),r.first().on("mouseover.lg",(function(){clearTimeout(t),r.addClass("lg-pager-hover")})),r.first().on("mouseout.lg",(function(){t=setTimeout((function(){r.removeClass("lg-pager-hover")}))})),this.core.LGel.on(i+".pager",(function(t){var r=t.detail.index;e.manageActiveClass.call(e,r)})),this.core.LGel.on(s+".pager",(function(){r.empty(),r.html(e.getPagerHtml(e.core.galleryItems)),e.manageActiveClass(e.core.index)}))}},e.prototype.manageActiveClass=function(e){var t=this.core.outer.find(".lg-pager-cont");t.removeClass("lg-pager-active"),t.eq(e).addClass("lg-pager-active")},e.prototype.destroy=function(){this.core.outer.find(".lg-pager-outer").remove(),this.core.LGel.off(".lg.pager"),this.core.LGel.off(".pager")},e}();t.default=n}}]);
//# sourceMappingURL=lg-plugin-5.js.map