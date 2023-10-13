import {
    animate,
    state,
    style,
    transition,
    trigger,
} from '@angular/animations';

export const sidebarAnimation = [
    trigger('openClose', [
        state(
            'open',
            style({
                width: '255px',
            })
        ),
        state(
            'closed',
            style({
                width: '60px',
            })
        ),
        transition('open => closed', animate('400ms ease-in-out')),
        transition('closed => open', animate('400ms ease-in-out')),
    ]),
];
