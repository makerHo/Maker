document.write(123+"<br/>");
document.write(123);
var arr=new Array('white','pueple','yellow','black');
arr.push('blue');//.push���������ݿ�arrĩβ�������ݣ��ı�Դ���ݿ�����
console.log��arr��;
//������Ϊarr=['white','pueple','yellow','black','blue'];
arr.pop('blue')//ɾ��arr���ݿ���ĩβ��blue��
console.log(arr)
//������Ϊarr=['white','pueple','yellow','black'];
arr.unshift('red');//��arr��������ǰ������redԪ�أ��ı�Դ�������ݣ����Ҹı�Դ��������
//������Ϊarr=['red','white','pueple','yellow','black'];
arr.shift('red');//��arr������ɾ����һ��Ԫ�أ��ı�Դ���������������
//������Ϊarr=['white','pueple','yellow','black'];
var arr2=arr.shlic(2,3)//��Դ�����н�ȡ����������5֮ǰ��Ԫ�أ�
console.log(arr2)
//���Ϊarr=['white','pueple','yellow','black'];arr2=['pueple','yellow']