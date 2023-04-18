var tour = new Tour({
    storage: false
});

var name = '';

tour.addSteps(
    [
        {
            element: '#caro-tour',
            placement: 'bottom',
            title: 'Welcome to Edureka!',
            content: 'We would like to know your name?<br><input type="text" id="name">',
            onNext: function(){
                name = $('#name').val();
            }
        },
        {
            element: '#col-1',
            placement: 'bottom',
            title: 'Live Classes',
            content: function(){return "hello " + name +', We offer Live Classes'}
        },
        {
            element: '#col-2',
            placement: 'bottom',
            title: 'Flexible schedule',
            content: function(){return name +', you can chang your batch at anytime'}
        },
        {
            element: '#col-3',
            placement: 'bottom',
            title: '24x7 Support',
            content: function(){return name +', we provide 25x7 customer support'}
        },
        {
            element: '#baked',
            placement: 'bottom',
            title: 'Freah Baked Courses',
            content: function(){return name+', check out our fresh baked courses'}
        },
        {
            element:'#social',
            placement: 'bottom',
            title: 'Social Media',
            content: function(){return name+', check out our social media handles for latest update'}
        },
        {
            element:'#navtour',
            placement: 'bottom',
            title: 'Navigation bar',
            content: 'This is our navigation bar you can use it for navigation to our site'
        },
        {
            element:'#tourbtn',
            placement: 'bottom',
            title: 'Sign Up Button',
            content: function(){return name+', you wanted to starting learning with us then click on the signup button'},
        },
        {
            orphan: true,
            title: 'Thank you',
            backdrop: true,
            placement: 'top',
            content: 'Thanks you for visiting our site'
        }
    ]
);

$(document).ready(function(){
    $('#tour-start-btn').on('click',function(){
        //initialize tour
        tour.init();
        //starts the tour
        tour.start();
        $event.preventDefault();
    });
});