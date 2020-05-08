import dataApi from './api/api.js';
import {MODAL_TITLE} from '../constant';
export default {
  data() {
    return {
      noData: [{id:1,name:'测试1'},{id:2,name:'测试2'},{id:3,name:'测试3'}],
      yesData: [1,3],
      // 注意:key 的字符类型要一致!!!

      value: '', // 搜索框
      visible: false,
      loading:false,
      MODAL_TITLE,
      operationVal: 1, // 加减量
      numVal: 1, // 默认数量
      modalTitle: '', // 模态框标题
      modalType: '', // 模态框类型
      showInput: false,
      mouldcode: '',
      maincode: '',
      value2: '', // 模态框表格搜索
      implement:[], // 行政科室数据下拉列表
      openings:[],// 开单科室下拉列表
      mainTypesList:[], // 成分大类拉列表
      detailTypesList:[], // 成分小类拉列表
      tableTitle:[
        {
          prop:'name',
          label:'编码',
          width:'100px'
        },
        {
          prop:'name',
          label:'名称',
        }
      ],
      tableData:[
        {
          value:'1',
          name:'悄悄告诉'
        },
        {
          value:'2',
          name:'一个秘密'
        },
        {
          value:'3',
          name:'往下看'
        },
        {
          value:'4',
          name:'哎呀，没了'
        },
        {
          value:'5',
          name:'我出来喽'
        },
        {
          value:'6',
          name:'好吧告诉你'
        },
        {
          value:'7',
          name:'这个秘密啊'
        },
        {
          value:'8',
          name:'这个秘密就是'
        },
        {
          value:'9',
          name:'就是'
        },
        {
          value:'10',
          name:'下班喽'
        }
      ],// 对应项目列表
      mtype:[
        {
          value:'1',
          name:'常规备血'
        },
        {
          value:'2',
          name:'常规用血'
        },
        {
          value:'3',
          name:'紧急用血'
        },
        {
          value:'4',
          name:'自体输血'
        },
        {
          value:'5',
          name:'备血预约'
        }
      ], // 模板类型数据下拉列表
      category: [
        {
          value:'0',
          name:'门诊'
        },
        {
          value:'1',
          name:'住院'
        },
        {
          value:'2',
          name:'体检'
        },
        {
          value:'9',
          name:'全部'
        }
      ], // 开单类别下拉列表
      codeLIst: {
        code:'',
        name:''
      },
      form: {
        mouldcode:'', // 模板代码
        mouldname: '', // 模板名称
        mouldtype: '', // 模板类型 1 常规备血，2 常规用血，3 紧急用血，4 自体输血，5 备血预约
        execdeptcode: '', // 执行科室代码
        applydepts: [], // 申请科室代码
        usearea: '', // 开单类别） 0 门诊，1 住院， 2 体检 ，9 全部

        itemcode: '', // 项目代码
        itemname:'', // 项目名称
        maincode: '', // 成分大类代码
        mainname:'', // 成分大类名称
        detailcode:'', // 成分小类代码
        detailname:'', // 成分小类名称
        amount:0, // 默认数量
        hisitemcode:'', // 对应费用明细项编号
        addfactor: '', // 增减因子
        remark: '', // 备注

        code:'',
        name:''
      },
      mouldItemsRow: {},
      rules: {
        mouldcode: [{
          required: true, message: '请输入模板代码', trigger: 'blur'
        }],
        mouldname: [{
          required: true, message: '请输入模板名称', trigger: 'blur'
        }],
        itemcode: [{
          required: true, message: '请输入项目代码', trigger: 'blur'
        }],
        itemname: [{
          required: true, message: '请输入项目名称', trigger: 'blur'
        }],
        mouldtype: [{
          required: true, message: '请选择模板类型', trigger: 'change'
        }],
        "execdeptcode": [{
          required: true, message: '请选择执行科室', trigger: 'change'
        }],
        // applydepts: [{
        //   required: true, message: '请选择开单科室', trigger: 'change'
        // }],
        usearea: [{
          required: true, message: '请选择开单类别', trigger: 'change'
        }],
        addfactor: [
          { required: true, message: '加减量不能为空'},
          { type: 'number', message: '加减量必须为数字值'}
        ],
        // detailname: [{
        //   required: true, message: '请选择成分小类', trigger: 'change'
        // }],
        hisitemcode: [{
          required: true, message: '请选择费用对应', trigger: 'change'
        }]
      },
      selection: [],
      listMouldItems: [],
      listMoulds: [],
      isShow: {
        operation:true,
        selection:true
      },
      nowSelectData: [], // 左边选中列表数据
      nowSelectRightData: [], // 右边选中列表数据
      selectArr:[],  // 右边列表
      buttonSize: 'large',

    };
  },
  computed: {
  },
  watch: {
    "form.maincode"(o , n) {
      console.log(o , n);
    },
    'form.detailcode'(o, n) {
      console.log(o, n);
    },
    listMoulds (o, n) {
      if(this.mouldItemsRow.MOULD_CODE ) {
        this.$nextTick(function() {
          this.$refs.interfaceTable.setCurrentRow(this.listMoulds[this.mouldItemsRow.index])
        })
        this.MouldItems(o[this.mouldItemsRow.index])
        this.mouldcode = o[this.mouldItemsRow.index].MOULD_CODE
      } else {
        this.$nextTick(function() {
          this.$refs.interfaceTable.setCurrentRow(this.listMoulds[0])
        })
        this.MouldItems(o[0])
        this.mouldcode = o[0].MOULD_CODE
      }

    }
  },
  created() {
    this.Moulds()
  },
  mounted() {
  },
  methods: {
    checkAll(val) {
      this.nowSelectData = val;
      console.log('row',val);
    },
    checkRightAll(val) {
      this.nowSelectRightData = val;
    },
    handelSelect(){   
      this.selectArr = this.handleConcatArr(this.selectArr, this.nowSelectData) 
      this.handleRemoveTabList(this.nowSelectData,  this.tableData);
      this.nowSelectData = [];
   },
    // 取消
    handleRemoveSelect() {
      this.tableData = this.handleConcatArr(this.tableData, this.nowSelectRightData) 
      this.handleRemoveTabList(this.nowSelectRightData,  this.selectArr);
      this.nowSelectRightData = [];
    },
    handleConcatArr(selectArr, nowSelectData) {
      let arr = [];
      arr = arr.concat(selectArr, nowSelectData);   
      console.log(arr,'selectArr, nowSelectData',selectArr, nowSelectData);

      return arr;
    },
    handleRemoveTabList(isNeedArr,  originalArr) {
      console.log('isNeedArr',isNeedArr);
      if(isNeedArr.length && originalArr.length) {
         for(let i=0; i<isNeedArr.length; i++) {
            for(let k=0; k<originalArr.length; k++) {
              if(isNeedArr[i]["name"] === originalArr[k]["name"]) {
                originalArr.splice(k, 1);   
              }
            }
         }
      }
    },
    handleChange(value, direction, movedKeys) {
      console.log(value, direction, movedKeys);
       //可以通过direction回调right/left 来进行操作，right：把数字移到右边，left把数据移到左边
       if(direction === "right") {
          
       }
       if(direction === "left") {
          
       }
          
  },
    async handleChange (e) {
      if (e === '1' || e ==='2') {
        console.log('12412');
        const res = await dataApi.getFindMould({mouldtype:e})
        console.log('res',res);
      }
      console.log('e',e);
    },
    async remoteMethod(query) {
      console.log('eee',query);
      this.loading = true;
      const openings = await dataApi.getDeptInfos({
        depttype:'1',
        search:query
      })
      this.loading = false;
      this.openings = openings.data
    },
    // filterMethod (query) {
    //   console.log('query',query);
    // },
    async remoteMethod1(query) {
      console.log('eee',query,t);
      // this.loading = true;
      // // const openings = await dataApi.getDeptInfos({
      // //   depttype:'1',
      // //   search:e
      // // })
      // this.loading = false;
      // this.openings = openings.data
    },
    async handleFocusInput() {
   
    },
    async MouldItems (row) { 
      const res = await dataApi.getMouldItems({
        mouldcode: row.MOULD_CODE
      })
      this.listMouldItems = res.data
    },
    async Moulds () {
      const res = await dataApi.getMoulds()
      this.listMoulds = res.data
      this.loading = true;
      const openings = await dataApi.getDeptInfos({depttype:'1',pagesize:100,pageno:1})
      this.loading = false;
      this.openings = openings.data.DEPTS
    },
    handleClone(row) {
      this.visible = true
    },
    // 模态框表格多选值
    handleSelectionChange (val) {
      this.selection = val
      console.log(this.selection)
    },
    hadleInputFocus () {
      this.visible = true
      this.modalType = ''
      this.modalTitle = this.MODAL_TITLE.SELECT_ITEM
    },
    // 模态框➕按钮事件
    handlePlus (title) {
      if (title === 'big') {
        this.modalTitle = this.MODAL_TITLE.LARGE_CLASS
      } else {
        this.modalTitle = this.MODAL_TITLE.SUB_CLASS
      }
      console.log('模态框➕按钮事件')
    },
    tableRowClassName({row,rowIndex}) {
       row.index = rowIndex;
     },
    // 点击申请单列表某一行触发
    handleRow (row) {
      console.log(row)
      this.mouldItemsRow = row
      this.MouldItems(row)
    },
    handleSelChange(row) {
      console.log(row);
      this.getListDetailTypes(row.DETAIL_CODE)
      this.maincode = row.DETAIL_CODE
      this.form.detailname = ''
      this.form.detailcode = ''
      this.form.itemcode = ''
      this.form.itemname = ''
    },
    // copiedmouldcode
    async handleSelChange1(row) {
      if (row) {
        this.form.itemcode = row.DETAIL_CODE
        this.form.itemname = row.DETAIL_NAME
        this.form = {...this.form}
      }
      if (this.form.maincode === '') {
        const res = await dataApi.getByDetailType({detailcode: row.DETAIL_CODE})
        // this.mainTypesList = res.data
        const list = []
        list.push(res.data)
        this.mainTypesList = list
        this.form.maincode = res.data.MAIN_NAME
        this.getListDetailTypes(res.data.MAIN_CODE)
        this.getListMainTypes()
      }
      
    },
    // 点击模态框新增按钮事件
    async submit () {
    //  if {
      if (this.modalTitle === this.MODAL_TITLE.SELECT_ITEM) {
        console.log(this.selection);
        this.modalTitle = '项目'
      } else {
        this.$refs.form.validateForm(async (valid) => {
          if (valid) {
            if (this.modalType === this.MODAL_TITLE.EADIT) {
              if (this.modalTitle === '申请单'){
                const res = await dataApi.getModifyMould({...this.form})
                console.log(res.type);
                if (res.type === 'SUCCESS') {
                  this.showMsg(res.message,'success')
                  this.Moulds()
                  this.visible = false
                } else {
                  this.showMsg(res.message,'error')
                }
              } else {
                const list = {
                  mouldcode:this.mouldItemsRow.MOULD_CODE || this.mouldcode, // 模板代码
                  itemcode: this.form.itemcode, // 项目代码
                  itemname: this.form.itemname, // 项目名称
                  maincode: this.form.maincode.value, // 成分大类代码
                  mainname: this.form.maincode.DETAIL_NAME, // 成分大类名称
                  detailcode: this.form.detailcode.value, // 成分小类代码
                  detailname: this.form.detailcode.DETAIL_NAME, // 成分小类名称
                  amount: this.form.amount, // 默认数量
                  hisitemcode: this.form.hisitemcode, // 对应费用明细项编号
                  addfactor:  this.form.addfactor, // 增减因子
                  remark: this.form.remark // 备注
                }
                const res = await dataApi.getModifyMouldItem({...list})
                	if (res.type === 'SUCCESS') {
                    this.showMsg(res.message,'success')
                    this.MouldItems()
                    this.visible = false
                  } else {
                    this.showMsg(res.message,'error')
                  }
              }
            } else {
              // const res = await dataApi.getModifyMouldItem({})
              if (this.modalTitle === '项目') {
                console.log(this.form);
                const list = {
                  mouldcode:this.mouldItemsRow.MOULD_CODE || this.mouldcode, // 模板代码
                  itemcode: this.form.itemcode, // 项目代码
                  itemname: this.form.itemname, // 项目名称
                  maincode: this.form.maincode.value, // 成分大类代码
                  mainname: this.form.maincode.DETAIL_NAME, // 成分大类名称
                  detailcode: this.form.detailcode.value, // 成分小类代码
                  detailname: this.form.detailcode.DETAIL_NAME, // 成分小类名称
                  amount: this.form.amount, // 默认数量
                  hisitemcode: this.form.hisitemcode, // 对应费用明细项编号
                  addfactor:  this.form.addfactor, // 增减因子
                  remark: this.form.remark // 备注
                }
                const res = await dataApi.getAddMouldItem({...list})
                	if (res.type === 'SUCCESS') {
                    this.showMsg(res.message,'success')
                    this.visible = false
                    this.MouldItems(this.mouldItemsRow)
                  } else {
                    this.showMsg(res.message,'error')
                  }
              } else if (this.modalTitle === '成分大类'){
                const res = await dataApi.gitAddMainComponentType({
                  maincode:this.form.code,
                  mainname:this.form.name,
                })
                console.log(res,'成分大类');

                if (res.type === 'SUCCESS') {
                  this.showMsg(res.message,'success')
                  this.getListMainTypes()
                  this.modalTitle = '项目'
                } else {
                  this.showMsg(res.message,'error')
                }
              } else if (this.modalTitle === '成分小类') {
                const res = await dataApi.getAddDetailComponentType({
                  detailcode:this.form.code,
                  detailname:this.form.name,
                  maincode:this.maincode
                })
                console.log(res);
                if (res.type === 'SUCCESS') {
                  this.showMsg(res.message,'success')
                  this.modalTitle = '项目'
                  this.getListMainTypes()
                } else {
                  this.showMsg(res.success,'error')
                }
              } else {
                console.log('this.form.applydepts.',this.form.applydepts);
                const applydepts = []
                this.form.applydepts.map(item => {
                  applydepts.push({deptcode:item.deptcode})
                })
                console.log('applydepts,applydepts',applydepts);
                const list = {
                  mouldcode:this.form.mouldcode, // 模板代码
                  mouldname: this.form.mouldname, // 模板名称
                  mouldtype: this.form.mouldtype, 
                  execdeptcode: this.form.execdeptcode, // 执行科室代码
                  applydepts, // 申请科室代码
                  usearea: this.form.usearea, // 开单类别） 0 门诊，1 住院， 2 体检 ，9 全部
                  copiedmouldcode: this.mouldItemsRow.MOULD_CODE
                }
                const res = await dataApi.getAddMould({...list})
                	if (res.type === 'SUCCESS') {
                    this.showMsg(res.message,'success')
                    this.Moulds()
                    this.visible = false
                  } else {
                    this.showMsg(res.message,'error')
                  }
              }
            }
          } else {
            // 未通过
            console.log('invalid form !')
          }
        })
      }
    },
    // 点击模态框取消按钮事件
    reset () {
      this.$refs.form.resetFields()
      if (this.modalTitle === '成分大类' || this.modalTitle === '成分小类') {
        this.modalTitle = '项目'
      } else if (this.modalTitle===this.MODAL_TITLE.SELECT_ITEM) {
        this.modalTitle = '项目'
      } else {
        this.form.maincode = ''
        this.form.mainname = ''
        this.form.remark = ''
        this.form.amount = 0
        this.form.addfactor = ''
        this.$refs.form.resetFields()
        this.visible = false
      }
      this.visible = false
    },
    // 列表删除提示框确定按钮
    handleConfirm (row,t,index) {
      this.isShowRow(t,'delete',row,index)
      this.tableData.splice(index, 1)
    },
    // 列表提示框取消按钮
     handleCancel (index) {
      // 手动取消
      this.cancelManually = true
      setTimeout(() => {
        this.listMouldItems[index].switch = !this.listMouldItems[index].switch // 恢复状态
      }, 200) // 等关闭气泡后修改状态， 避免出现数据状态过度，影响体验
    },
    // 新增按钮
    handleAdd (t) {
      this.visible=true
      this.modalType = this.MODAL_TITLE.ADD
      this.isShowRow(t)
    },
    // 项目列表修改按钮
    onEditing (row,t) {
      this.visible=true
      this.modalType = this.MODAL_TITLE.EADIT
      this.isShowRow(t,'edit',row)
      console.log(row);
    },
    handleClone (row, t) {
      this.visible=true
      this.modalType = ''
      this.isShowRow(t,'clone',row)
    },
    handleClose (tag) {
      this.selection.splice(this.selection.indexOf(tag), 1)
    },
    add (showInput) {
      if (showInput === true ) {
        this.showInput = false
      } else {
        this.showInput = true
      }
    },
    // 判断显示modal内容
    async isShowRow (t,isHandle,row,index) {
      if (t === 'left') {
        if (isHandle === 'delete') {
          this.$confirm('删除此模版将同步删除申请单下的所有项目， 是否确认删除？', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(async () => {
            const res = await dataApi.getRemoveMould({
              mouldcode:row.MOULD_CODE
            })
            if (res.type === 'SUCCESS') {
              this.showMsg(res.message,'success')
              this.listMoulds.splice(index, 1)
              this.Moulds()
            } else {
              this.showMsg(res.message,'error')
            }
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消删除'
            });
          });
        } else if (isHandle === 'edit' || isHandle === 'clone') {
          this.modalTitle = this.MODAL_TITLE.FORM
          const res = await dataApi.getFindMould({mouldcode:row.MOULD_CODE})
          console.log('res',res);
          if (isHandle === 'clone') {
            this.form = res.data
            this.$set(this.form, this.form.execdeptcode, 12345)
            this.form.mouldcode = ''
            this.form.mouldname = ''
          } else {
            this.form = res.data
            res.data.applydepts.map(item => {
              this.form.applydepts.push(item.deptname)
            })
          }

        } else {
          this.modalTitle = this.MODAL_TITLE.FORM
        }
        const res = await dataApi.getDeptInfos({depttype:'3'})
        this.implement = res.data
      
      } else if (t === 'right') {
        if (isHandle === 'delete') {
          const res = await dataApi.getRemoveMouldItem({
            itemcode:row.MOULD_ITEM_CODE,
            mouldcode:this.mouldItemsRow.MOULD_CODE
          })
          if (res.type === 'SUCCESS') {
            this.showMsg(res.message,'success')
            this.listMouldItems.splice(index, 1)
            this.MouldItems(this.mouldItemsRow)
          } else {
            this.showMsg(res.message,'error')
          }
        } else if (isHandle === 'edit') {
          this.modalTitle = this.MODAL_TITLE.ITEM
          console.log(this.mouldcode);
          
          const res = await dataApi.getFindMouldItem({
            mouldcode:this.mouldcode,
            itemcode:row.MOULD_ITEM_CODE})
          this.form = res.data
          console.log(res, row.MOULD_ITEM_CODE);
        } else {
          this.modalTitle = this.MODAL_TITLE.ITEM
        
        }
          // 成分小类接口
          this.getListDetailTypes()
          // 成分大类接口
          this.getListMainTypes()
      } else {
        this.modalTitle = this.MODAL_TITLE.CLONE
      }
      console.log(t)
    },
    handlePageSizeChange(val) {
      console.log(val, '条/页');
    },
    // 成分大类接口
    async getListMainTypes () {
      const listMainTypes = await dataApi.getListMainTypes()
      this.mainTypesList = listMainTypes.data
      console.log(listMainTypes);
    },
    // 成分小类接口
    async getListDetailTypes (n) {
      // if (this.form.maincode) {
      //    n = this.form.maincode
      // }
      console.log(n,this.form.maincode);

      const listDetailTypes = await dataApi.getListDetailTypes({maincode:n})
      this.detailTypesList = listDetailTypes.data 
    }
  }
};