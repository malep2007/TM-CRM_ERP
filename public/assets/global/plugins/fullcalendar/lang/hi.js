! function(a) {
    "function" == typeof define && define.amd ? define(["jquery", "moment"], a) : a(jQuery, moment)
}(function(a, b) {
    var c = {
            1: "१",
            2: "२",
            3: "३",
            4: "४",
            5: "५",
            6: "६",
            7: "७",
            8: "८",
            9: "९",
            0: "०"
        },
        d = {
            "१": "1",
            "२": "2",
            "३": "3",
            "४": "4",
            "५": "5",
            "६": "6",
            "७": "7",
            "८": "8",
            "९": "9",
            "०": "0"
        };
    (b.defineLocale || b.lang).call(b, "hi", {
        months: "जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर".split("_"),
        monthsShort: "जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.".split("_"),
        weekdays: "रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
        weekdaysShort: "रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि".split("_"),
        weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
        longDateFormat: {
            LT: "A h:mm बजे",
            LTS: "A h:mm:ss बजे",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, LT",
            LLLL: "dddd, D MMMM YYYY, LT"
        },
        calendar: {
            sameDay: "[आज] LT",
            nextDay: "[कल] LT",
            nextWeek: "dddd, LT",
            lastDay: "[कल] LT",
            lastWeek: "[पिछले] dddd, LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s में",
            past: "%s पहले",
            s: "कुछ ही क्षण",
            m: "एक मिनट",
            mm: "%d मिनट",
            h: "एक घंटा",
            hh: "%d घंटे",
            d: "एक दिन",
            dd: "%d दिन",
            M: "एक महीने",
            MM: "%d महीने",
            y: "एक वर्ष",
            yy: "%d वर्ष"
        },
        preparse: function(a) {
            return a.replace(/[१२३४५६७८९०]/g, function(a) {
                return d[a]
            })
        },
        postformat: function(a) {
            return a.replace(/\d/g, function(a) {
                return c[a]
            })
        },
        meridiemParse: /रात|सुबह|दोपहर|शाम/,
        meridiemHour: function(a, b) {
            return 12 === a && (a = 0), "रात" === b ? 4 > a ? a : a + 12 : "सुबह" === b ? a : "दोपहर" === b ? a >= 10 ? a : a + 12 : "शाम" === b ? a + 12 : void 0
        },
        meridiem: function(a, b, c) {
            return 4 > a ? "रात" : 10 > a ? "सुबह" : 17 > a ? "दोपहर" : 20 > a ? "शाम" : "रात"
        },
        week: {
            dow: 0,
            doy: 6
        }
    }), a.fullCalendar.datepickerLang("hi", "hi", {
        closeText: "बंद",
        prevText: "पिछला",
        nextText: "अगला",
        currentText: "आज",
        monthNames: ["जनवरी ", "फरवरी", "मार्च", "अप्रेल", "मई", "जून", "जूलाई", "अगस्त ", "सितम्बर", "अक्टूबर", "नवम्बर", "दिसम्बर"],
        monthNamesShort: ["जन", "फर", "मार्च", "अप्रेल", "मई", "जून", "जूलाई", "अग", "सित", "अक्ट", "नव", "दि"],
        dayNames: ["रविवार", "सोमवार", "मंगलवार", "बुधवार", "गुरुवार", "शुक्रवार", "शनिवार"],
        dayNamesShort: ["रवि", "सोम", "मंगल", "बुध", "गुरु", "शुक्र", "शनि"],
        dayNamesMin: ["रवि", "सोम", "मंगल", "बुध", "गुरु", "शुक्र", "शनि"],
        weekHeader: "हफ्ता",
        dateFormat: "dd/mm/yy",
        firstDay: 1,
        isRTL: !1,
        showMonthAfterYear: !1,
        yearSuffix: ""
    }), a.fullCalendar.lang("hi", {
        buttonText: {
            month: "महीना",
            week: "सप्ताह",
            day: "दिन",
            list: "कार्यसूची"
        },
        allDayText: "सभी दिन",
        eventLimitText: function(a) {
            return "+अधिक " + a
        }
    })
});