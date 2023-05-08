class ListNode{
    val: number[] | null
    next: ListNode | null
    constructor(val?:number[], next?:ListNode | null){
        this.val = (val===undefined ? null : val)
        this.next = (next===undefined ? null : next)
    }
}

function addTwoNumbers(l1: number[] | null, l2: number[] | null): ListNode | null {

    console.log(l1)
    console.log(l2)

    return null
};

addTwoNumbers([2,4,3], [5,6,4])
