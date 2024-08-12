fn add(num_one: i32, num_two: i32) -> i32 {
    num_one + num_two
}

fn main() {
    let mut  my_name = "Marcelo";
    my_name = "Marcelo Fernando";

    let total = add(10, 20);

    if total > 50 {
        print!("You quality for free shipping!");
    }
    else if total > 20 {
        print!("if you add more items, you can qualify for free shipping")
    }
    else {
        print!("No free shipping")
    }

    print!("{:?} {}", total, my_name);
}
