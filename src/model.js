import image from './assets/image.png';
import { TitleBlock, ImageBlock, ColumnsBlock, TextBlock } from './classes/blocks';

const text = `Триатло́н (троебо́рье) — вид спорта, представляющий собой мультиспортивную гонку, 
состоящую из непрерывного последовательного прохождения её участниками трёх этапов: плавания, 
велогонки и бега, каждый из которых происходит из самостоятельного циклического вида спорта.`;

const array = [
    'Соревнования начинаются с плавания. Производится массовый старт всех участников с берега, понтона или ' +
    'прямо из воды (в длинном триатлоне). В случае пониженной температуры воды (обычно не выше +24,5 °С ' +
    'по правилам триатлона IRONMAN) допускается использование гидрокостюмов толщиной до 5 мм.',

    'После выхода из воды спортсмены переодеваются в транзитной зоне, садятся на велосипеды, и начинается ' +
    'велосипедный этап. По дистанции расположены пункты питания, но техническая помощь для профессионалов ' +
    'запрещена. В коротком триатлоне вообще используются обычные шоссейные велосипеды для групповых гонок, ' +
    'в триатлоне IRONMAN профессионалы используют велосипеды, более схожие с велосипедами для раздельной ' +
    'гонки в велоспорте.',

    'Главное правило состоит в том, что спортсмен должен передвигаться на ногах.'
];

export const model = [
    new TitleBlock(
        'Triathlon',
        {
            tag: 'h2',
            styles: {
                background: 'linear-gradient(to right, #ff0099, #493240)',
                color: ' #fff',
                'text-align': 'center',
                padding: '1.5rem'
            }
        }),
    new ImageBlock(
        image,
        {
            styles: {
                padding: '2 rem 0',
                display: 'flex',
                'justify-content': 'center'
            },
            imageStyles: {
                width: '100%',
                height: 'auto'
            },
            alt: 'Triathlon'
        }),
    new ColumnsBlock(
        [...array],
        {
            styles: {
                background: 'linear-gradient(to right, #8e2de2, #4a00e0)',
                padding: '2rem',
                color: '#fff',
                'font-weight': 'bold'
            }
        }
    ),
    new TextBlock(
        text,
        {
            styles: {
                background: 'linear-gradient(to right, #f2994a, #f2c94c)',
                padding: '1rem',
                'font-weight': 'bold'
            }
        })
];
