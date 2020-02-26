function getFib(){
    fn = 0;
    f1 = 1;

    return () => {
        
        let f0 = fn + f1;
        fn = f1;
        f1 = f0;

        return fn;
    }

}