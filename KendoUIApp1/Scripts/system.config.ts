﻿/// <reference types="systemjs" />

declare var baseURL;

System.config({
    warnings: true,
    baseURL: baseURL,
    map: {
        "jquery": "Scripts/kendo/2019.1.220/jquery.min.js",
        "jszip": "Scripts/kendo/2019.1.220/jszip.min.js",
        "angular.min": "Scripts/kendo/2019.1.220/angular.min.js",
        "kendo.all.min": "Scripts/kendo/2019.1.220/kendo.all.min.js",
        "kendo.culture.en-GB.min": "Scripts/kendo/2019.1.220/cultures/kendo.culture.en-GB.min.js",
        "kendo.messages.en-GB.min": "Scripts/kendo/2019.1.220/messages/kendo.messages.en-GB.min.js",
        "kendo.autocomplete.min": "Scripts/kendo/2019.1.220/kendo.autocomplete.min.js",
        "kendo.binder.min": "Scripts/kendo/2019.1.220/kendo.binder.min.js",
        "kendo.button.min": "Scripts/kendo/2019.1.220/kendo.button.min.js",
        "kendo.calendar.min": "Scripts/kendo/2019.1.220/kendo.calendar.min.js",
        "kendo.color.min": "Scripts/kendo/2019.1.220/kendo.color.min.js",
        "kendo.colorpicker.min": "Scripts/kendo/2019.1.220/kendo.colorpicker.min.js",
        "kendo.columnmenu.min": "Scripts/kendo/2019.1.220/kendo.columnmenu.min.js",
        "kendo.columnsorter.min": "Scripts/kendo/2019.1.220/kendo.columnsorter.min.js",
        "kendo.combobox.min": "Scripts/kendo/2019.1.220/kendo.combobox.min.js",
        "kendo.core.min": "Scripts/kendo/2019.1.220/kendo.core.min.js",
        "kendo.data.min": "Scripts/kendo/2019.1.220/kendo.data.min.js",
        "kendo.data.odata.min": "Scripts/kendo/2019.1.220/kendo.data.odata.min.js",
        "kendo.data.signalr.min": "Scripts/kendo/2019.1.220/kendo.data.signalr.min.js",
        "kendo.data.xml.min": "Scripts/kendo/2019.1.220/kendo.data.xml.min.js",
        "kendo.dateinput.min": "Scripts/kendo/2019.1.220/kendo.dateinput.min.js",
        "kendo.datepicker.min": "Scripts/kendo/2019.1.220/kendo.datepicker.min.js",
        "kendo.datetimepicker.min": "Scripts/kendo/2019.1.220/kendo.datetimepicker.min.js",
        "kendo.dialog.min": "Scripts/kendo/2019.1.220/kendo.dialog.min.js",
        "kendo.dom.min": "Scripts/kendo/2019.1.220/kendo.dom.min.js",
        "kendo.draganddrop.min": "Scripts/kendo/2019.1.220/kendo.draganddrop.min.js",
        "kendo.dropdownlist.min": "Scripts/kendo/2019.1.220/kendo.dropdownlist.min.js",
        "kendo.dropdowntree.min": "Scripts/kendo/2019.1.220/kendo.dropdowntree.min.js",
        "kendo.editable.min": "Scripts/kendo/2019.1.220/kendo.editable.min.js",
        "kendo.excel.min": "Scripts/kendo/2019.1.220/kendo.excel.min.js",
        "kendo.filebrowser.min": "Scripts/kendo/2019.1.220/kendo.filebrowser.min.js",
        "kendo.filtercell.min": "Scripts/kendo/2019.1.220/kendo.filtercell.min.js",
        "kendo.filtermenu.min": "Scripts/kendo/2019.1.220/kendo.filtermenu.min.js",
        "kendo.fx.min": "Scripts/kendo/2019.1.220/kendo.fx.min.js",
        "kendo.gantt.list.min": "Scripts/kendo/2019.1.220/kendo.gantt.list.min.js",
        "kendo.gantt.timeline.min": "Scripts/kendo/2019.1.220/kendo.gantt.timeline.min.js",
        "kendo.groupable.min": "Scripts/kendo/2019.1.220/kendo.groupable.min.js",
        "kendo.imagebrowser.min": "Scripts/kendo/2019.1.220/kendo.imagebrowser.min.js",
        "kendo.list.min": "Scripts/kendo/2019.1.220/kendo.list.min.js",
        "kendo.listview.min": "Scripts/kendo/2019.1.220/kendo.listview.min.js",
        "kendo.maskedtextbox.min": "Scripts/kendo/2019.1.220/kendo.maskedtextbox.min.js",
        "kendo.mediaplayer.min": "Scripts/kendo/2019.1.220/kendo.mediaplayer.min.js",
        "kendo.menu.min": "Scripts/kendo/2019.1.220/kendo.menu.min.js",
        "kendo.mobile.actionsheet.min": "Scripts/kendo/2019.1.220/kendo.mobile.actionsheet.min.js",
        "kendo.mobile.application.min": "Scripts/kendo/2019.1.220/kendo.mobile.application.min.js",
        "kendo.mobile.button.min": "Scripts/kendo/2019.1.220/kendo.mobile.button.min.js",
        "kendo.mobile.buttongroup.min": "Scripts/kendo/2019.1.220/kendo.mobile.buttongroup.min.js",
        "kendo.mobile.collapsible.min": "Scripts/kendo/2019.1.220/kendo.mobile.collapsible.min.js",
        "kendo.mobile.drawer.min": "Scripts/kendo/2019.1.220/kendo.mobile.drawer.min.js",
        "kendo.mobile.listview.min": "Scripts/kendo/2019.1.220/kendo.mobile.listview.min.js",
        "kendo.mobile.loader.min": "Scripts/kendo/2019.1.220/kendo.mobile.loader.min.js",
        "kendo.mobile.modalview.min": "Scripts/kendo/2019.1.220/kendo.mobile.modalview.min.js",
        "kendo.mobile.navbar.min": "Scripts/kendo/2019.1.220/kendo.mobile.navbar.min.js",
        "kendo.mobile.pane.min": "Scripts/kendo/2019.1.220/kendo.mobile.pane.min.js",
        "kendo.mobile.popover.min": "Scripts/kendo/2019.1.220/kendo.mobile.popover.min.js",
        "kendo.mobile.scroller.min": "Scripts/kendo/2019.1.220/kendo.mobile.scroller.min.js",
        "kendo.mobile.scrollview.min": "Scripts/kendo/2019.1.220/kendo.mobile.scrollview.min.js",
        "kendo.mobile.shim.min": "Scripts/kendo/2019.1.220/kendo.mobile.shim.min.js",
        "kendo.mobile.splitview.min": "Scripts/kendo/2019.1.220/kendo.mobile.splitview.min.js",
        "kendo.mobile.switch.min": "Scripts/kendo/2019.1.220/kendo.mobile.switch.min.js",
        "kendo.mobile.tabstrip.min": "Scripts/kendo/2019.1.220/kendo.mobile.tabstrip.min.js",
        "kendo.mobile.view.min": "Scripts/kendo/2019.1.220/kendo.mobile.view.min.js",
        "kendo.multiselect.min": "Scripts/kendo/2019.1.220/kendo.multiselect.min.js",
        "kendo.notification.min": "Scripts/kendo/2019.1.220/kendo.notification.min.js",
        "kendo.numerictextbox.min": "Scripts/kendo/2019.1.220/kendo.numerictextbox.min.js",
        "kendo.ooxml.min": "Scripts/kendo/2019.1.220/kendo.ooxml.min.js",
        "kendo.pager.min": "Scripts/kendo/2019.1.220/kendo.pager.min.js",
        "kendo.panelbar.min": "Scripts/kendo/2019.1.220/kendo.panelbar.min.js",
        "kendo.pivot.configurator.min": "Scripts/kendo/2019.1.220/kendo.pivot.configurator.min.js",
        "kendo.pivot.fieldmenu.min": "Scripts/kendo/2019.1.220/kendo.pivot.fieldmenu.min.js",
        "kendo.pivotgrid.min": "Scripts/kendo/2019.1.220/kendo.pivotgrid.min.js",
        "kendo.popup.min": "Scripts/kendo/2019.1.220/kendo.popup.min.js",
        "kendo.progressbar.min": "Scripts/kendo/2019.1.220/kendo.progressbar.min.js",
        "kendo.reorderable.min": "Scripts/kendo/2019.1.220/kendo.reorderable.min.js",
        "kendo.resizable.min": "Scripts/kendo/2019.1.220/kendo.resizable.min.js",
        "kendo.responsivepanel.min": "Scripts/kendo/2019.1.220/kendo.responsivepanel.min.js",
        "kendo.router.min": "Scripts/kendo/2019.1.220/kendo.router.min.js",
        "kendo.scheduler.agendaview.min": "Scripts/kendo/2019.1.220/kendo.scheduler.agendaview.min.js",
        "kendo.scheduler.dayview.min": "Scripts/kendo/2019.1.220/kendo.scheduler.dayview.min.js",
        "kendo.scheduler.monthview.min": "Scripts/kendo/2019.1.220/kendo.scheduler.monthview.min.js",
        "kendo.scheduler.recurrence.min": "Scripts/kendo/2019.1.220/kendo.scheduler.recurrence.min.js",
        "kendo.scheduler.timelineview.min": "Scripts/kendo/2019.1.220/kendo.scheduler.timelineview.min.js",
        "kendo.scheduler.view.min": "Scripts/kendo/2019.1.220/kendo.scheduler.view.min.js",
        "kendo.selectable.min": "Scripts/kendo/2019.1.220/kendo.selectable.min.js",
        "kendo.slider.min": "Scripts/kendo/2019.1.220/kendo.slider.min.js",
        "kendo.sortable.min": "Scripts/kendo/2019.1.220/kendo.sortable.min.js",
        "kendo.splitter.min": "Scripts/kendo/2019.1.220/kendo.splitter.min.js",
        "kendo.spreadsheet.min": "Scripts/kendo/2019.1.220/kendo.spreadsheet.min.js",
        "kendo.tabstrip.min": "Scripts/kendo/2019.1.220/kendo.tabstrip.min.js",
        "kendo.timepicker.min": "Scripts/kendo/2019.1.220/kendo.timepicker.min.js",
        "kendo.timezones.min": "Scripts/kendo/2019.1.220/kendo.timezones.min.js",
        "kendo.toolbar.min": "Scripts/kendo/2019.1.220/kendo.toolbar.min.js",
        "kendo.tooltip.min": "Scripts/kendo/2019.1.220/kendo.tooltip.min.js",
        "kendo.touch.min": "Scripts/kendo/2019.1.220/kendo.touch.min.js",
        "kendo.treelist.min": "Scripts/kendo/2019.1.220/kendo.treelist.min.js",
        "kendo.treeview.draganddrop.min": "Scripts/kendo/2019.1.220/kendo.treeview.draganddrop.min.js",
        "kendo.treeview.min": "Scripts/kendo/2019.1.220/kendo.treeview.min.js",
        "kendo.upload.min": "Scripts/kendo/2019.1.220/kendo.upload.min.js",
        "kendo.userevents.min": "Scripts/kendo/2019.1.220/kendo.userevents.min.js",
        "kendo.validator.min": "Scripts/kendo/2019.1.220/kendo.validator.min.js",
        "kendo.view.min": "Scripts/kendo/2019.1.220/kendo.view.min.js",
        "kendo.virtuallist.min": "Scripts/kendo/2019.1.220/kendo.virtuallist.min.js",
        "kendo.web.min": "Scripts/kendo/2019.1.220/kendo.web.min.js",
        "kendo.window.min": "Scripts/kendo/2019.1.220/kendo.window.min.js",
        "pako_deflate.min": "Scripts/kendo/2019.1.220/pako_deflate.min.js",
        "kendoaspnetmvc": "Scripts/kendo/2019.1.220/kendo.aspnetmvc.min.js",
        "kendodatavizbarcode": "Scripts/kendo/2019.1.220/kendo.dataviz.barcode.min.js",
        "kendodatavizchart": "Scripts/kendo/2019.1.220/kendo.dataviz.chart.min.js",
        "kendodatavizcore": "Scripts/kendo/2019.1.220/kendo.dataviz.core.min.js",
        "kendodatavizdiagram": "Scripts/kendo/2019.1.220/kendo.dataviz.diagram.min.js",
        "kendodatavizgauge": "Scripts/kendo/2019.1.220/kendo.dataviz.gauge.min.js",
        "kendodatavizmap": "Scripts/kendo/2019.1.220/kendo.dataviz.map.min.js",
        "kendodatavizqrcode": "Scripts/kendo/2019.1.220/kendo.dataviz.qrcode.min.js",
        "kendodatavizsparkline": "Scripts/kendo/2019.1.220/kendo.dataviz.sparkline.min.js",
        "kendodatavizstock": "Scripts/kendo/2019.1.220/kendo.dataviz.stock.min.js",
        "kendodatavizthemes": "Scripts/kendo/2019.1.220/kendo.dataviz.themes.min.js",
        "kendodataviztreemap": "Scripts/kendo/2019.1.220/kendo.dataviz.treemap.min.js",
        "kendodrawing": "Scripts/kendo/2019.1.220/kendo.drawing.min.js",
        "kendoeditor": "Scripts/kendo/2019.1.220/kendo.editor.min.js",
        "kendogantt": "Scripts/kendo/2019.1.220/kendo.gantt.min.js",
        "kendogrid": "Scripts/kendo/2019.1.220/kendo.grid.min.js",
        "kendopdf": "Scripts/kendo/2019.1.220/kendo.pdf.min.js",
        "kendoscheduler": "Scripts/kendo/2019.1.220/kendo.scheduler.min.js"
    },
    bundles: {
        "kendogrid": ["kendo.grid.min"],
        "kendoaspnetmvc": ["kendo.aspnetmvc.min"],
        "kendodatavizbarcode": ["kendo.dataviz.barcode.min"],
        "kendodatavizchart": ["kendo.dataviz.chart.min"],
        "kendodatavizcore": ["kendo.dataviz.core.min"],
        "kendodatavizdiagram": ["kendo.dataviz.diagram.min"],
        "kendodatavizgauge": ["kendo.dataviz.gauge.min"],
        "kendodatavizmap": ["kendo.dataviz.map.min"],
        "kendodatavizqrcode": ["kendo.dataviz.qrcode.min"],
        "kendodatavizsparkline": ["kendo.dataviz.sparkline.min"],
        "kendodatavizstock": ["kendo.dataviz.stock.min"],
        "kendodatavizthemes": ["kendo.dataviz.themes.min"],
        "kendodataviztreemap": ["kendo.dataviz.treemap.min"],
        "kendodrawing": ["kendo.drawing.min"],
        "kendoeditor": ["kendo.editor.min"],
        "kendogantt": ["kendo.gantt.min"],
        "kendopdf": ["kendo.pdf.min"],
        "kendoscheduler": ["kendo.scheduler.min"]
    }
});