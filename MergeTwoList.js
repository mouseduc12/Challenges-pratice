var mergeTwoLists = function(l1, l2) {
    let dummy = new ListNode(-1)
    let head = dummy 
    
    while(l1 !== null && l2 !== null){
        if(l1.value < l2.value){
            dummy.next = l1
            l1 = l1.next
        } else {
            dummy.next = l2
            l2 = l2.next
        }
        dummy = dummy.next
    }
    
    if(l1 !== null){
        dummy.next = l1
    } else {
        dummy.next = l2
    }
};
