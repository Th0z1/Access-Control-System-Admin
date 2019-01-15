import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { filter, map } from 'rxjs/operators';

@Injectable()
export class UserService {
    constructor(private firestore: AngularFirestore) {

    }

    numbers(numbers: Array<number>) {
        return numbers.map(number => {
            return number * 2;
        })
    }

    users(length: number): Observable<any> {
        return this.firestore.collection('users').valueChanges()
            .pipe(map(users => {
                return users.filter((user: any) => {
                    if (user.name.length > length) {
                        return true
                    }

                    return false
                })
            }))
    }
}