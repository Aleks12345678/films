    let i = 0;
    while(i < 4){

        let a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколько оцените его?', '');
                i++;
            if(a != '' && b != '' && a != null && b != null && a.length < 50){
                personalMovieDB.movies[a] = b;
                i++;
            } else {
                console.log('ошиибка');
                i--;
            }
    }
    
        // do{
        //     let a = prompt('Один из последних просмотренных фильмов?', ''),
        //         b = prompt('На сколько оцените его?', '');
        //         i++;
        //     if(a != '' && b != '' && a != null && b != null && a.length < 50){
        //         personalMovieDB.movies[a] = b;
        //         i++;
        //     } else {
        //         console.log('ошиибка');
        //         i--;

        //     }
        // }
        // while(i < 4);