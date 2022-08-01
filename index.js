function sendsms()


{
    Value1 = document.getElementById("i1").value;
    Value2 = document.getElementById("i2").value;
    Element = document.createElement("li");
    If(value1 != "")

    {
        Text = document.createTextNode(value1);
        Element.appendChild(Text);
        Document.getElementById("mydiv").appendChild(Element);
        Element.style.color = "green";
        Document.getElementById("i1").value = "";
    }
    elseif(value2 != "")

    {
        Text = document.createTextNode(value2);
        Element.appendChild(Text);
        Document.getElementById("mydiv").appendChild(Element);
        Element.style.color = "red";
        Document.getElementById("i2").value = "";
    }

}