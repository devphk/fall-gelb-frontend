import {
    animate,
    state,
    style,
    transition,
    trigger,
} from '@angular/animations';

export const fadeFastAnimation = [
    trigger('fadeInFast', [
        state(
            'void',
            style({
                opacity: 0,
            })
        ),
        transition('void <=> *', animate(100)),
    ])
];
