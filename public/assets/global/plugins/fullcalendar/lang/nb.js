! function(a) {
    "function" == typeof define && define.amd ? define(["jquery", "moment"], a) : a(jQuery, moment)
}(function(a, b) {
    (b.defineLocale || b.lang).call(b, "nb", {
        months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
        monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
        weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
        weekdaysShort: "søn_man_tirs_ons_tors_fre_lør".split("_"),
        weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
        longDateFormat: {
            LT: "H.mm",
            LTS: "LT.ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY [kl.] LT",
            LLLL: "dddd D. MMMM YYYY [kl.] LT"
        },
        calendar: {
            sameDay: "[i dag kl.] LT",
            nextDay: "[i morgen kl.] LT",
            nextWeek: "dddd [kl.] LT",
            lastDay: "[i går kl.] LT",
            lastWeek: "[forrige] dddd [kl.] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "om %s",
            past: "for %s siden",
            s: "noen sekunder",
            m: "ett minutt",
            mm: "%d minutter",
            h: "en time",
            hh: "%d timer",
            d: "en dag",
            dd: "%d dager",
            M: "en måned",
            MM: "%d måneder",
            y: "ett år",
            yy: "%d år"
        },
        ordinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 4
        }
    }), a.fullCalendar.datepickerLang("nb", "nb", {
        closeText: "Lukk",
        prevText: "&#xAB;Forrige",
        nextText: "Neste&#xBB;",
        currentText: "I dag",
        monthNames: ["januar", "februar", "mars", "april", "mai", "juni", "juli", "august", "september", "oktober", "november", "desember"],
        monthNamesShort: ["jan", "feb", "mar", "apr", "mai", "jun", "jul", "aug", "sep", "okt", "nov", "des"],
        dayNamesShort: ["søn", "man", "tir", "ons", "tor", "fre", "lør"],
        dayNames: ["søndag", "mandag", "tirsdag", "onsdag", "torsdag", "fredag", "lørdag"],
        dayNamesMin: ["sø", "ma", "ti", "on", "to", "fr", "lø"],
        weekHeader: "Uke",
        dateFormat: "dd.mm.yy",
        firstDay: 1,
        isRTL: !1,
        showMonthAfterYear: !1,
        yearSuffix: ""
    }), a.fullCalendar.lang("nb", {
        buttonText: {
            month: "Måned",
            week: "Uke",
            day: "Dag",
            list: "Agenda"
        },
        allDayText: "Hele dagen",
        eventLimitText: "til"
    })
});