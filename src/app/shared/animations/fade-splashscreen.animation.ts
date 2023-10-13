import {
    animate,
    animateChild,
    query,
    style,
    transition,
    trigger,
} from '@angular/animations';

export const fadeSplashScreen = [
    trigger('fadeLoader', [
        transition(':leave', [
            query(':leave', animateChild(), { optional: true }),
            animate(300, style({ opacity: 0 })),
        ]),
    ]),
];
