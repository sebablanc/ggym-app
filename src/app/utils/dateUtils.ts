const MONTHS_WITH_30_DAYS = [3, 5, 8, 10];
const MONTH_WITH_28_DAYS = 1;
const FIRST_YEAR = 2020;

export class DateUtils {

    static createDaysMonthList(month: number, year: number) {
        let days = [];
        let lastDay = this.lastDay(month, year);
        for(let i = 1; i<=lastDay; i++) {
            days.push(i);
        }

        return days;
    }

    static createYearsList() {
        let years = [];
        for(let i = FIRST_YEAR; i<=new Date().getFullYear(); i++) {
            years.push(i);
        }

        return years;
    }

    static createDate(day: number, month: number, year: number, lastHour = false) {
        let date = new Date();
        date.setFullYear(year);
        date.setMonth(month);
        date.setDate(day);
        if(!lastHour){
            date.setHours(0, 0, 0, 0);
        } else {
            date.setHours(23, 59, 59);
        }

        return date;
    }

    static createFirstDayOfMonthCurrentYear(month: number) {
        return this.createDate(1, month, new Date().getFullYear());
    }

    static createFirstDayOfMonth(month: number, year: number) {
        return this.createDate(1, month, year);
    }

    private static lastDay(month: number, year: number) {
        let lastDay = 31
        if(MONTHS_WITH_30_DAYS.includes(month)){
            lastDay = 30;
        } else if(month === MONTH_WITH_28_DAYS) {
            lastDay = this.isLeapYear(year) ? 29 : 28;
        }

        return lastDay;
    }

    static createLastDateOfMonth(month: number, year: number) {
        let lastDay = this.lastDay(month, year);
        return this.createDate(lastDay, month, year, true);
    }

    static createLastDateOfMonthCurrentYear(month: number) {
        return this.createLastDateOfMonth(month, new Date().getFullYear());
    }

    static isLeapYear(year: number) {
        return (year%4 === 0) && (year%100 !== 0 || year %400 === 0);
    }

}