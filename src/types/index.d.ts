declare module '*.module.css' {
    const classes: { [key: string]: string };
    export = classes;
}

// о фиксе проблемы прочитал тут https://qna.habr.com/q/1356762