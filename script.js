// // var url = 'http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D';
async function callAPi() {
    let result = await fetch('http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D');
    result = await result.json();
    console.log(result);
    document.getElementById("table-data").innerHTML = result.map((user) =>
        `<table>
    <td>${user.id}</td>
    <td>${user.firstName}</td>
    <td>${user.lastName}</td>
    <td>${user.email}</td>
    <td>${user.phone}</td>
    </table>`
    ).join("");


    let tdcount = document.getElementsByTagName("tr");
    for (let i = 0; i < tdcount.length; i++) {
        tdcount[i].onclick = function () {
            var x = document.getElementsByClassName("active");
            if (x.length != 0) {
                x[0].className = "";
            }
            this.className = "active";
            $("#info-content").css({ display: "block" });
            $("#userSelected").html(result[i - 1].firstName);
            document.getElementById("Description").innerHTML = result[i - 1].description;
            document.getElementById("Address").innerHTML = result[i - 1].address.streetAddress;
            document.getElementById("City").innerHTML = result[i - 1].address.city;
            document.getElementById("State").innerHTML = result[i - 1].address.state;
            document.getElementById("Zip").innerHTML = result[i - 1].address.zip;
        };
    }

}
callAPi();

const searchFun = () => {
    let filter = document.getElementById('search-box').value.toUpperCase();
    let table = document.getElementById('table');
    let tr = table.getElementsByTagName('tr');

    for (var i = 0; i < tr.length; i++) {
        let td = tr[i].getElementsByTagName('td')[1];

        if (td) {
            let textvalue = td.textContent || td.innerHTML;
            if (textvalue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}




