import * as _ from 'underscore'

export class App_Commons_Volatile {
    private handle: number;
    private data: any;
    private timeout: number = 5000;

    constructor(data?: any, millis?: number) {
        if (data) this.set(data);
        if (millis) this.duration(millis);
    }
    set(data?: any): void {
        this.data = data;
        if (this.handle) clearTimeout(this.handle);
        this.handle = setTimeout(() => {
            this.handle = undefined;
            this.data = undefined;
        }, this.timeout);
    }
    get(): any {
        return this.data;
    }
    unset(): void {
        if (this.handle) clearTimeout(this.handle);
        this.handle = undefined;
        this.data = undefined;
    }
    duration(millis?: number): number {
        if (millis) this.timeout = millis;
        return this.timeout;
    }
    isAlive(): boolean {
        return !_.isUndefined(this.handle);
    }
}