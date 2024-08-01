/**
 * jQuery plugins for Bulma CSS Framework v1.0.2
 * By: Dmitry A Karasev
 *
 * https://github.com/articks/jquery-bulma
 *
 * Copyright 2023 Dmitry A Karasev
 * You may use this project under MIT license.
 */

/**
 * xModal
 */
(function($){
    $.fn.xModal = function(option,data) {
        if(this.is('.modal.is-active')) {
            switch(option) {
                case 'id':{
                    return this.attr('id');
                    break;
                }
                case 'options':{
                    return this.data('options');
                    break;
                }
                case 'delete':{
                    return this.find('*[data-modaldelete]');
                    break;
                }
                case 'deletebackground':{
                    return this.find('.modal-background[data-modaldelete]:first');
                    break;
                }
                case 'deletebutton':{
                    return this.find('.modal-close[data-modaldelete]:first');
                    break;
                }
                case 'content':{
                    return this.find('*[data-modalcontent]:first');
                    break;
                }
                case 'disable':{
                    this.addClass('is-boxloading');
                    return this;
                    break;
                }
                case 'enable':{
                    this
                        .removeClass('is-boxloading')
                        .removeAttr('data-boxloading-progress')
                        .css('--progress','0%')
                        .removeAttr('data-boxloading-title');
                    return this;
                    break;
                }
                case 'disabled':{
                    return this.hasClass('is-boxloading');
                    break;
                }
                case 'close':{
                    if(!this.xModal('disabled') && !this.xModal('options').noclose) {
                        if(this.xModal('options').onclose && typeof(this.xModal('options').onclose)==='function') {
                            this.xModal('options').onclose(this);
                        }
                        this.remove();
                    }
                    break;
                }
                case 'forcedclose':{
                    if(this.xModal('options').onclose && typeof(this.xModal('options').onclose)==='function') {
                        this.xModal('options').onclose(this);
                    }
                    this.remove();
                    break;
                }
                case 'progress':{
                    this.xModal('disable');
                    let s = (data[0]) ? data[0] : 0;
                    let t = (data[1]) ? data[1] : 0;
                    s = (s<t) ? s : t;
                    if(t) {
                        this.attr('data-boxloading-progress',Math.round(100*s/t)+"%").css('--progress',Math.round(100*s/t)+'%');
                    }
                    if(data[2] && typeof(data[2])=='string') {
                        this.attr('data-boxloading-title',data[2]);
                    }
                }
                default:{
                    return false;
                    break;
                }
            }
        }
        else {
            console.error('Target selector mismatch!');
        }
    };
    $.extend({
        xModal:function(options){
            options = $.extend(
                {
                    content:'',
                    onshow:null,
                    onclose:null,
                    noclose:false
                },
                options
            );
            let modal = $(
                '<div class="modal is-active">'+
                    '<div class="modal-background" '+((!options.noclose)?'data-modaldelete':'')+'></div>'+
                    '<div class="modal-content" data-modalcontent></div>'+
                    ((!options.noclose)?
                        '<button class="modal-close is-large" data-modaldelete></button>'
                    :'')+
                '</div>'
            ).attr('id','xmodal'+Math.random().toString().replace(/\D/giu,'')).data('options',options).appendTo('body');
            if(options.content) {
                if(typeof(options.content)==='object' && options.content instanceof jQuery) {
                    modal.xModal('content').append(options.content);
                }
                else if(typeof(options.content)==='function') {
                    modal.xModal('content').append(options.content());
                }
                else {
                    modal.xModal('content').html(options.content);
                }
            }
            if(options.onshow && typeof(options.onshow)==='function') {
                options.onshow(modal);
            }
            modal.on('click','*[data-modaldelete]',function(e){
                e.preventDefault();
                e.stopPropagation();
                $(this).closest('.modal').xModal('close');
            });
            return modal;
        }
    });
})(jQuery);

/**
 * xModalCard
 */
(function($){
    $.fn.xModalCard = function(option,data) {
        if(this.is('.modal.is-active')) {
            switch(option) {
                case 'id':{
                    return this.attr('id');
                    break;
                }
                case 'options':{
                    return this.data('options');
                    break;
                }
                case 'delete':{
                    return this.find('*[data-modaldelete]');
                    break;
                }
                case 'deletebackground':{
                    return this.find('.modal-background[data-modaldelete]:first');
                    break;
                }
                case 'deletebutton':{
                    return this.find('.delete[data-modaldelete]:first');
                    break;
                }
                case 'card':{
                    return this.find('*[data-modalcard]:first');
                    break;
                }
                case 'head':{
                    return this.find('*[data-modalhead]:first');
                    break;
                }
                case 'title':{
                    return this.find('*[data-modaltitle]:first');
                    break;
                }
                case 'body':
                case 'content':{
                    return this.find('*[data-modalbody]:first');
                    break;
                }
                case 'foot':
                case 'buttons':{
                    return this.find('*[data-modalfoot]:first');
                    break;
                }
                case 'disable':{
                    this.xModalCard('card').addClass('is-boxloading');
                    return this;
                    break;
                }
                case 'enable':{
                    this.xModalCard('card')
                        .removeClass('is-boxloading')
                        .removeAttr('data-boxloading-progress')
                        .css('--progress','0%')
                        .removeAttr('data-boxloading-title');
                    return this;
                    break;
                }
                case 'disabled':{
                    return this.xModalCard('card').hasClass('is-boxloading');
                    break;
                }
                case 'close':{
                    if(!this.xModalCard('disabled') && !this.xModalCard('options').noclose) {
                        if(this.xModalCard('options').onclose && typeof(this.xModalCard('options').onclose)==='function') {
                            this.xModalCard('options').onclose(this);
                        }
                        this.remove();
                    }
                    break;
                }
                case 'forcedclose':{
                    if(this.xModalCard('options').onclose && typeof(this.xModalCard('options').onclose)==='function') {
                        this.xModalCard('options').onclose(this);
                    }
                    this.remove();
                    break;
                }
                case 'progress':{
                    this.xModalCard('disable');
                    let s = (data[0]) ? data[0] : 0;
                    let t = (data[1]) ? data[1] : 0;
                    s = (s<t) ? s : t;
                    if(t) {
                        this.xModalCard('card').attr('data-boxloading-progress',Math.round(100*s/t)+"%").css('--progress',Math.round(100*s/t)+'%');
                    }
                    if(data[2] && typeof(data[2])=='string') {
                        this.xModalCard('card').attr('data-boxloading-title',data[2]);
                    }
                }
                default:{
                    return false;
                    break;
                }
            }
        }
        else {
            console.error('Target selector mismatch!');
        }
    };
    $.extend({
        xModalCard:function(options){
            options = $.extend(
                {
                    title:'',
                    content:'',
                    buttons:false,
                    onshow:null,
                    onclose:null,
                    noclose:false
                },
                options
            );
            let modal = $(
                '<div class="modal is-active">'+
                    '<div class="modal-background" '+((!options.noclose)?'data-modaldelete':'')+'></div>'+
                    '<div class="modal-card has-border-radius" data-modalcard>'+
                        '<div class="modal-card-head" data-modalhead>'+
                            '<div class="modal-card-title is-flex-wfix is-flex-shrink-1 has-text-ellipsis is-wrapless" data-modaltitle></div>'+
                            ((!options.noclose)?
                                '<div class="delete" data-modaldelete></div>'
                            :'')+
                        '</div>'+
                        '<div class="modal-card-body" data-modalbody></div>'+
                        '<div class="modal-card-foot is-flex-wfix is-ofauto" data-modalfoot></div>'+
                    '</div>'+
                '</div>'
            ).attr('id','xmodal'+Math.random().toString().replace(/\D/giu,'')).data('options',options).appendTo('body');
            if(options.title) {
                if(typeof(options.title)==='object' && options.title instanceof jQuery) {
                    modal.xModalCard('title').append(options.title);
                }
                else if(typeof(options.title)==='function') {
                    modal.xModalCard('title').append(options.title());
                }
                else if(options.title!==true) {
                    modal.xModalCard('title').html(options.title || '');
                }
            }
            else if(options.title===false) {
                modal.xModalCard('head').addClass('is-hidden');
            }
            if(options.content) {
                if(typeof(options.content)==='object' && options.content instanceof jQuery) {
                    modal.xModalCard('content').append(options.content);
                }
                else if(typeof(options.content)==='function') {
                    modal.xModalCard('content').append(options.content());
                }
                else if(options.content!==true) {
                    modal.xModalCard('content').html(options.content || '');
                }
            }
            if(options.buttons) {
                if(typeof(options.buttons)==='object' && options.buttons instanceof jQuery) {
                    modal.xModalCard('foot').append(options.buttons);
                }
                else if(typeof(options.buttons)==='function') {
                    modal.xModalCard('foot').append(options.buttons());
                }
                else if(Array.isArray(options.buttons)) {
                    $.each(options.buttons,function(index,button){
                        if(typeof(button)==='object' && button instanceof jQuery) {
                            modal.xModalCard('foot').append(button);
                        }
                        else if(typeof(button)==='function') {
                            modal.xModalCard('foot').append(button());
                        }
                        else {
                            modal.xModalCard('foot').html(button || '');
                        }
                    });
                }
                else if(options.buttons!==true) {
                    modal.xModalCard('foot').html(options.buttons);
                }
            }
            else {
                modal.xModalCard('foot').addClass('is-hidden');
            }
            if(options.onshow && typeof(options.onshow)==='function') {
                options.onshow(modal);
            }
            modal.on('click','*[data-modaldelete]',function(e){
                e.preventDefault();
                e.stopPropagation();
                $(this).closest('.modal').xModalCard('close');
            });
            return modal;
        }
    });
})(jQuery);

/**
 * xTabs
 */
(function($){
    $.fn.xTabs = function(option) {
        return this.each(function(){
            if($(this).is('[data-xtabs]')) {
                let wrapper = $(this);
                let group = wrapper.data('xtabs');
                $(this).on('click','*[data-xtabslink^="'+group+'-"]',function(e){
                    e.preventDefault();
                    if(!$(this).is('.is-active')) {
                        wrapper.find('*[data-xtabslink^="'+group+'-"]').removeClass('is-active');
                        $(this).addClass('is-active');
                        wrapper.find('*[data-xtabscont^="'+group+'-"]').addClass('is-hidden');
                        wrapper.find('*[data-xtabscont="'+$(this).data('xtabslink')+'"]').removeClass('is-hidden');
                    }
                });
                if(wrapper.find('*[data-xtabslink^="'+group+'-"].is-active').length==0) {
                    wrapper.find('*[data-xtabslink^="'+group+'-"]').removeClass('is-active').filter(':first').addClass('is-active');
                    wrapper.find('*[data-xtabscont^="'+group+'-"]').addClass('is-hidden').filter(':first').removeClass('is-hidden');
                }
            }
        });
    };
    $(function(){
        $('*[data-xtabs]').xTabs();
    });
})(jQuery);
