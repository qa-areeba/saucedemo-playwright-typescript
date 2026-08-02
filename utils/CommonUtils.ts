export class CommonUtils {

    static generateRandomNumber(): number {

        return Math.floor(Math.random() * 100000);

    }

    static generateRandomEmail(): string {

        return `automation${this.generateRandomNumber()}@gmail.com`;

    }

}