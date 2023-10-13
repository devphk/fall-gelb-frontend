import {
    animate,
    state,
    style,
    transition,
    trigger,
} from '@angular/animations';

export const fabButtonAnimation = [
    trigger('Rotate', [
        state('default', style({ transform: 'rotate(0)' })),
        state(
            'rotated',
            style({
                transform: 'rotate(360deg)',
            })
        ),
        transition('default <=> rotated', animate('300ms ease-in')),
    ]),
    trigger('Litle', [
        state(
            'default',
            style({
                width: '56px',
                height: '56px',
            })
        ),
        state(
            'litled',
            style({
                width: '45px',
                height: '45px',
            })
        ),
    ]),
];
