import { Injectable } from '@angular/core';
import {
    MatSnackBar,
    MatSnackBarConfig,
} from '@angular/material/snack-bar';
@Injectable({
    providedIn: 'root',
})
export class ToastService {
    private _online = true;
    constructor(private snackBar: MatSnackBar) {}

    get defaultConfig() {
        const config = new MatSnackBarConfig();
        config.horizontalPosition = 'start';
        config.verticalPosition = 'bottom';
        config.duration = 6000;
        config.panelClass = 'success-mat-snack-bar-container';
        return config;
    }

    get errorConfig() {
        const config = new MatSnackBarConfig();
        config.horizontalPosition = 'start';
        config.verticalPosition = 'bottom';
        config.duration = 6000;
        config.panelClass = 'error-mat-snack-bar-container';
        return config;
    }

    get offlineConfig() {
        const config = new MatSnackBarConfig();
        config.horizontalPosition = 'start';
        config.verticalPosition = 'bottom';
        config.duration = Number.POSITIVE_INFINITY;
        config.panelClass = 'error-mat-snack-bar-container';
        return config;
    }

    showToaster = (
        message: string,
        isError?: boolean,
        isOffline?: boolean,
        config: MatSnackBarConfig = isError
            ? this.errorConfig
            : isOffline
            ? this.offlineConfig
            : this.defaultConfig
    ) => {
        /**
         * avoid showing toast if connection is offline, since
         * connection service handle toast message by itself
         */
        if (!this._online) {
            return;
        }
        this.snackBar.open(message, 'OK', config);
    };

    set online(online: boolean) {
        this._online = online;
    }

    dismiss = () => {
        this.snackBar.dismiss();
    };
}
