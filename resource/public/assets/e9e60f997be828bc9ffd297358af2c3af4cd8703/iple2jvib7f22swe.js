import{L as te,c as ae,i as re,d as ne,e as ie,f as se,g as oe,s as le,t as i,h as ce}from"./k4bn4b3bwbvscmzk.js";import{E as de,L as me}from"./l2wlubc7zbp7c107.js";import"./mw79q27te9dqgj7u.js";import"./i16nwty7q09iq1st.js";import"./o1ivbuadejprpakj.js";import"./hpmltgx65508529x.js";import"./cdfz4zzo8ae7sffb.js";import"./hx2tdb79whqndr2i.js";import"./bwu3xfza0pxwe6ru.js";import"./kwa3fw7gjdaasnda.js";import"./j8qjjjf38v0oqfi8.js";import"./j76lrd6kdu2dvuce.js";import"./l8i8os8zb9hbkizc.js";import"./hcdx55t4k5s9h90a.js";import"./l4ck0jsx010sty0l.js";import"./kgovzb8a5v2gsd51.js";import"./cg1djtp0bw9bc15a.js";import"./nbsdgm0upgk4irzm.js";import"./cydma3qyvyx80hyp.js";import"./jq9wblohokz1apkp.js";import"./m1obf60srwp2ts7s.js";import"./mjcfyknvrjj9hd19.js";const ue=36,X=1,fe=2,b=3,C=4,pe=5,ge=6,he=7,_e=8,be=9,ve=10,ye=11,ke=12,xe=13,Oe=14,we=15,Qe=16,Ce=17,I=18,Se=19,A=20,E=21,R=22,Pe=23,qe=24;function P(t){return t>=65&&t<=90||t>=97&&t<=122||t>=48&&t<=57}function Te(t){return t>=48&&t<=57||t>=97&&t<=102||t>=65&&t<=70}function g(t,e,r){for(let a=!1;;){if(t.next<0)return;if(t.next==e&&!a){t.advance();return}a=r&&!a&&t.next==92,t.advance()}}function Ue(t,e){e:for(;;){if(t.next<0)return console.log("exit at end",t.pos);if(t.next==36){t.advance();for(let r=0;r<e.length;r++){if(t.next!=e.charCodeAt(r))continue e;t.advance()}if(t.next==36){t.advance();return}}else t.advance()}}function ze(t,e){let r="[{<(".indexOf(String.fromCharCode(e)),a=r<0?e:"]}>)".charCodeAt(r);for(;;){if(t.next<0)return;if(t.next==a&&t.peek(1)==39){t.advance(2);return}t.advance()}}function q(t,e){for(;!(t.next!=95&&!P(t.next));)e!=null&&(e+=String.fromCharCode(t.next)),t.advance();return e}function Le(t){if(t.next==39||t.next==34||t.next==96){let e=t.next;t.advance(),g(t,e,!1)}else q(t)}function j(t,e){for(;t.next==48||t.next==49;)t.advance();e&&t.next==e&&t.advance()}function D(t,e){for(;;){if(t.next==46){if(e)break;e=!0}else if(t.next<48||t.next>57)break;t.advance()}if(t.next==69||t.next==101)for(t.advance(),(t.next==43||t.next==45)&&t.advance();t.next>=48&&t.next<=57;)t.advance()}function Z(t){for(;!(t.next<0||t.next==10);)t.advance()}function p(t,e){for(let r=0;r<e.length;r++)if(e.charCodeAt(r)==t)return!0;return!1}const S=` 	\r
`;function W(t,e,r){let a=Object.create(null);a.true=a.false=pe,a.null=a.unknown=ge;for(let n of t.split(" "))n&&(a[n]=A);for(let n of e.split(" "))n&&(a[n]=E);for(let n of(r||"").split(" "))n&&(a[n]=qe);return a}const h="array binary bit boolean char character clob date decimal double float int integer interval large national nchar nclob numeric object precision real smallint time timestamp varchar varying ",_="absolute action add after all allocate alter and any are as asc assertion at authorization before begin between both breadth by call cascade cascaded case cast catalog check close collate collation column commit condition connect connection constraint constraints constructor continue corresponding count create cross cube current current_date current_default_transform_group current_transform_group_for_type current_path current_role current_time current_timestamp current_user cursor cycle data day deallocate declare default deferrable deferred delete depth deref desc describe descriptor deterministic diagnostics disconnect distinct do domain drop dynamic each else elseif end end-exec equals escape except exception exec execute exists exit external fetch first for foreign found from free full function general get global go goto grant group grouping handle having hold hour identity if immediate in indicator initially inner inout input insert intersect into is isolation join key language last lateral leading leave left level like limit local localtime localtimestamp locator loop map match method minute modifies module month names natural nesting new next no none not of old on only open option or order ordinality out outer output overlaps pad parameter partial path prepare preserve primary prior privileges procedure public read reads recursive redo ref references referencing relative release repeat resignal restrict result return returns revoke right role rollback rollup routine row rows savepoint schema scroll search second section select session session_user set sets signal similar size some space specific specifictype sql sqlexception sqlstate sqlwarning start state static system_user table temporary then timezone_hour timezone_minute to trailing transaction translation treat trigger under undo union unique unnest until update usage user using value values view when whenever where while with without work write year zone ",T={backslashEscapes:!1,hashComments:!1,spaceAfterDashes:!1,slashComments:!1,doubleQuotedStrings:!1,doubleDollarQuotedStrings:!1,unquotedBitLiterals:!1,treatBitsAsBytes:!1,charSetCasts:!1,plsqlQuotingMechanism:!1,operatorChars:"*+-%<>!=&|~^/",specialVar:"?",identifierQuotes:'"',caseInsensitiveIdentifiers:!1,words:W(_,h)};function Be(t,e,r,a){let n={};for(let s in T)n[s]=(t.hasOwnProperty(s)?t:T)[s];return e&&(n.words=W(e,r||"",a)),n}function M(t){return new de(e=>{var r;let{next:a}=e;if(e.advance(),p(a,S)){for(;p(e.next,S);)e.advance();e.acceptToken(ue)}else if(a==36&&t.doubleDollarQuotedStrings){let n=q(e,"");e.next==36&&(e.advance(),Ue(e,n),e.acceptToken(b))}else if(a==39||a==34&&t.doubleQuotedStrings)g(e,a,t.backslashEscapes),e.acceptToken(b);else if(a==35&&t.hashComments||a==47&&e.next==47&&t.slashComments)Z(e),e.acceptToken(X);else if(a==45&&e.next==45&&(!t.spaceAfterDashes||e.peek(1)==32))Z(e),e.acceptToken(X);else if(a==47&&e.next==42){e.advance();for(let n=1;;){let s=e.next;if(e.next<0)break;if(e.advance(),s==42&&e.next==47){if(n--,e.advance(),!n)break}else s==47&&e.next==42&&(n++,e.advance())}e.acceptToken(fe)}else if((a==101||a==69)&&e.next==39)e.advance(),g(e,39,!0),e.acceptToken(b);else if((a==110||a==78)&&e.next==39&&t.charSetCasts)e.advance(),g(e,39,t.backslashEscapes),e.acceptToken(b);else if(a==95&&t.charSetCasts)for(let n=0;;n++){if(e.next==39&&n>1){e.advance(),g(e,39,t.backslashEscapes),e.acceptToken(b);break}if(!P(e.next))break;e.advance()}else if(t.plsqlQuotingMechanism&&(a==113||a==81)&&e.next==39&&e.peek(1)>0&&!p(e.peek(1),S)){let n=e.peek(1);e.advance(2),ze(e,n),e.acceptToken(b)}else if(a==40)e.acceptToken(he);else if(a==41)e.acceptToken(_e);else if(a==123)e.acceptToken(be);else if(a==125)e.acceptToken(ve);else if(a==91)e.acceptToken(ye);else if(a==93)e.acceptToken(ke);else if(a==59)e.acceptToken(xe);else if(t.unquotedBitLiterals&&a==48&&e.next==98)e.advance(),j(e),e.acceptToken(R);else if((a==98||a==66)&&(e.next==39||e.next==34)){const n=e.next;e.advance(),t.treatBitsAsBytes?(g(e,n,t.backslashEscapes),e.acceptToken(Pe)):(j(e,n),e.acceptToken(R))}else if(a==48&&(e.next==120||e.next==88)||(a==120||a==88)&&e.next==39){let n=e.next==39;for(e.advance();Te(e.next);)e.advance();n&&e.next==39&&e.advance(),e.acceptToken(C)}else if(a==46&&e.next>=48&&e.next<=57)D(e,!0),e.acceptToken(C);else if(a==46)e.acceptToken(Oe);else if(a>=48&&a<=57)D(e,!1),e.acceptToken(C);else if(p(a,t.operatorChars)){for(;p(e.next,t.operatorChars);)e.advance();e.acceptToken(we)}else if(p(a,t.specialVar))e.next==a&&e.advance(),Le(e),e.acceptToken(Ce);else if(p(a,t.identifierQuotes))g(e,a,!1),e.acceptToken(Se);else if(a==58||a==44)e.acceptToken(Qe);else if(P(a)){let n=q(e,String.fromCharCode(a));e.acceptToken(e.next==46||e.peek(-n.length-1)==46?I:(r=t.words[n.toLowerCase()])!==null&&r!==void 0?r:I)}})}const K=M(T),Xe=me.deserialize({version:14,states:"%vQ]QQOOO#wQRO'#DSO$OQQO'#CwO%eQQO'#CxO%lQQO'#CyO%sQQO'#CzOOQQ'#DS'#DSOOQQ'#C}'#C}O'UQRO'#C{OOQQ'#Cv'#CvOOQQ'#C|'#C|Q]QQOOQOQQOOO'`QQO'#DOO(xQRO,59cO)PQQO,59cO)UQQO'#DSOOQQ,59d,59dO)cQQO,59dOOQQ,59e,59eO)jQQO,59eOOQQ,59f,59fO)qQQO,59fOOQQ-E6{-E6{OOQQ,59b,59bOOQQ-E6z-E6zOOQQ,59j,59jOOQQ-E6|-E6|O+VQRO1G.}O+^QQO,59cOOQQ1G/O1G/OOOQQ1G/P1G/POOQQ1G/Q1G/QP+kQQO'#C}O+rQQO1G.}O)PQQO,59cO,PQQO'#Cw",stateData:",[~OtOSPOSQOS~ORUOSUOTUOUUOVROXSOZTO]XO^QO_UO`UOaPObPOcPOdUOeUOfUOgUOhUO~O^]ORvXSvXTvXUvXVvXXvXZvX]vX_vX`vXavXbvXcvXdvXevXfvXgvXhvX~OsvX~P!jOa_Ob_Oc_O~ORUOSUOTUOUUOVROXSOZTO^tO_UO`UOa`Ob`Oc`OdUOeUOfUOgUOhUO~OWaO~P$ZOYcO~P$ZO[eO~P$ZORUOSUOTUOUUOVROXSOZTO^QO_UO`UOaPObPOcPOdUOeUOfUOgUOhUO~O]hOsoX~P%zOajObjOcjO~O^]ORkaSkaTkaUkaVkaXkaZka]ka_ka`kaakabkackadkaekafkagkahka~Oska~P'kO^]O~OWvXYvX[vX~P!jOWnO~P$ZOYoO~P$ZO[pO~P$ZO^]ORkiSkiTkiUkiVkiXkiZki]ki_ki`kiakibkickidkiekifkigkihki~Oski~P)xOWkaYka[ka~P'kO]hO~P$ZOWkiYki[ki~P)xOasObsOcsO~O",goto:"#hwPPPPPPPPPPPPPPPPPPPPPPPPPPx||||!Y!^!d!xPPP#[TYOZeUORSTWZbdfqT[OZQZORiZSWOZQbRQdSQfTZgWbdfqQ^PWk^lmrQl_Qm`RrseVORSTWZbdfq",nodeNames:"⚠ LineComment BlockComment String Number Bool Null ( ) { } [ ] ; . Operator Punctuation SpecialVar Identifier QuotedIdentifier Keyword Type Bits Bytes Builtin Script Statement CompositeIdentifier Parens Braces Brackets Statement",maxTerm:38,nodeProps:[["isolate",-4,1,2,3,19,""]],skippedNodes:[0,1,2],repeatNodeCount:3,tokenData:"RORO",tokenizers:[0,K],topRules:{Script:[0,25]},tokenPrec:0});function U(t){let e=t.cursor().moveTo(t.from,-1);for(;/Comment/.test(e.name);)e.moveTo(e.from,-1);return e.node}function y(t,e){let r=t.sliceString(e.from,e.to),a=/^([`'"])(.*)\1$/.exec(r);return a?a[2]:r}function w(t){return t&&(t.name=="Identifier"||t.name=="QuotedIdentifier")}function Ie(t,e){if(e.name=="CompositeIdentifier"){let r=[];for(let a=e.firstChild;a;a=a.nextSibling)w(a)&&r.push(y(t,a));return r}return[y(t,e)]}function N(t,e){for(let r=[];;){if(!e||e.name!=".")return r;let a=U(e);if(!w(a))return r;r.unshift(y(t,a)),e=U(a)}}function Re(t,e){let r=ce(t).resolveInner(e,-1),a=De(t.doc,r);return r.name=="Identifier"||r.name=="QuotedIdentifier"||r.name=="Keyword"?{from:r.from,quoted:r.name=="QuotedIdentifier"?t.doc.sliceString(r.from,r.from+1):null,parents:N(t.doc,U(r)),aliases:a}:r.name=="."?{from:e,quoted:null,parents:N(t.doc,r),aliases:a}:{from:e,quoted:null,parents:[],empty:!0,aliases:a}}const je=new Set("where group having order union intersect except all distinct limit offset fetch for".split(" "));function De(t,e){let r;for(let n=e;!r;n=n.parent){if(!n)return null;n.name=="Statement"&&(r=n)}let a=null;for(let n=r.firstChild,s=!1,c=null;n;n=n.nextSibling){let l=n.name=="Keyword"?t.sliceString(n.from,n.to).toLowerCase():null,o=null;if(!s)s=l=="from";else if(l=="as"&&c&&w(n.nextSibling))o=y(t,n.nextSibling);else{if(l&&je.has(l))break;c&&w(n)&&(o=y(t,n))}o&&(a||(a=Object.create(null)),a[o]=Ie(t,c)),c=/Identifier$/.test(n.name)?n:null}return a}function Ze(t,e){return t?e.map(r=>Object.assign(Object.assign({},r),{label:r.label[0]==t?r.label:t+r.label+t,apply:void 0})):e}const Ne=/^\w*$/,Ve=/^[`'"]?\w*[`'"]?$/;function V(t){return t.self&&typeof t.self.label=="string"}class z{constructor(e,r){this.idQuote=e,this.idCaseInsensitive=r,this.list=[],this.children=void 0}child(e){let r=this.children||(this.children=Object.create(null)),a=r[e];return a||(e&&!this.list.some(n=>n.label==e)&&this.list.push($(e,"type",this.idQuote,this.idCaseInsensitive)),r[e]=new z(this.idQuote,this.idCaseInsensitive))}maybeChild(e){return this.children?this.children[e]:null}addCompletion(e){let r=this.list.findIndex(a=>a.label==e.label);r>-1?this.list[r]=e:this.list.push(e)}addCompletions(e){for(let r of e)this.addCompletion(typeof r=="string"?$(r,"property",this.idQuote,this.idCaseInsensitive):r)}addNamespace(e){Array.isArray(e)?this.addCompletions(e):V(e)?this.addNamespace(e.children):this.addNamespaceObject(e)}addNamespaceObject(e){for(let r of Object.keys(e)){let a=e[r],n=null,s=r.replace(/\\?\./g,l=>l=="."?"\0":l).split("\0"),c=this;V(a)&&(n=a.self,a=a.children);for(let l=0;l<s.length;l++)n&&l==s.length-1&&c.addCompletion(n),c=c.child(s[l].replace(/\\\./g,"."));c.addNamespace(a)}}}function $(t,e,r,a){return new RegExp("^[a-z_][a-z_\\d]*$",a?"i":"").test(t)?{label:t,type:e}:{label:t,type:e,apply:r+t+r}}function $e(t,e,r,a,n,s){var c;let l=((c=s?.spec.identifierQuotes)===null||c===void 0?void 0:c[0])||'"',o=new z(l,!!s?.spec.caseInsensitiveIdentifiers),u=n?o.child(n):null;return o.addNamespace(t),e&&(u||o).addCompletions(e),r&&o.addCompletions(r),u&&o.addCompletions(u.list),a&&o.addCompletions((u||o).child(a).list),f=>{let{parents:v,from:H,quoted:k,empty:J,aliases:x}=Re(f.state,f.pos);if(J&&!f.explicit)return null;x&&v.length==1&&(v=x[v[0]]||v);let d=o;for(let O of v){for(;!d.children||!d.children[O];)if(d==o&&u)d=u;else if(d==u&&a)d=d.child(a);else return null;let B=d.maybeChild(O);if(!B)return null;d=B}let ee=k&&f.state.sliceDoc(f.pos,f.pos+1)==k,Q=d.list;return d==o&&x&&(Q=Q.concat(Object.keys(x).map(O=>({label:O,type:"constant"})))),{from:H,to:ee?f.pos+1:void 0,options:Ze(k,Q),validFor:k?Ve:Ne}}}function Ae(t,e){let r=Object.keys(t).map(a=>({label:e?a.toUpperCase():a,type:t[a]==E?"type":t[a]==A?"keyword":"variable",boost:-1}));return re(["QuotedIdentifier","SpecialVar","String","LineComment","BlockComment","."],ne(r))}let Ee=Xe.configure({props:[ie.add({Statement:se()}),oe.add({Statement(t,e){return{from:Math.min(t.from+100,e.doc.lineAt(t.from).to),to:t.to}},BlockComment(t){return{from:t.from+2,to:t.to-2}}}),le({Keyword:i.keyword,Type:i.typeName,Builtin:i.standard(i.name),Bits:i.number,Bytes:i.string,Bool:i.bool,Null:i.null,Number:i.number,String:i.string,Identifier:i.name,QuotedIdentifier:i.special(i.string),SpecialVar:i.special(i.name),LineComment:i.lineComment,BlockComment:i.blockComment,Operator:i.operator,"Semi Punctuation":i.punctuation,"( )":i.paren,"{ }":i.brace,"[ ]":i.squareBracket})]});class m{constructor(e,r,a){this.dialect=e,this.language=r,this.spec=a}get extension(){return this.language.extension}static define(e){let r=Be(e,e.keywords,e.types,e.builtin),a=te.define({name:"sql",parser:Ee.configure({tokenizers:[{from:K,to:M(r)}]}),languageData:{commentTokens:{line:"--",block:{open:"/*",close:"*/"}},closeBrackets:{brackets:["(","[","{","'",'"',"`"]}}});return new m(r,a,e)}}function We(t,e=!1){return Ae(t.dialect.words,e)}function Me(t,e=!1){return t.language.data.of({autocomplete:We(t,e)})}function Ke(t){return t.schema?$e(t.schema,t.tables,t.schemas,t.defaultTable,t.defaultSchema,t.dialect||L):()=>null}function Fe(t){return t.schema?(t.dialect||L).language.data.of({autocomplete:Ke(t)}):[]}function bt(t={}){let e=t.dialect||L;return new ae(e.language,[Fe(t),Me(e,!!t.upperCaseKeywords)])}const L=m.define({}),vt=m.define({charSetCasts:!0,doubleDollarQuotedStrings:!0,operatorChars:"+-*/<>=~!@#%^&|`?",specialVar:"",keywords:_+"a abort abs absent access according ada admin aggregate alias also always analyse analyze array_agg array_max_cardinality asensitive assert assignment asymmetric atomic attach attribute attributes avg backward base64 begin_frame begin_partition bernoulli bit_length blocked bom c cache called cardinality catalog_name ceil ceiling chain char_length character_length character_set_catalog character_set_name character_set_schema characteristics characters checkpoint class class_origin cluster coalesce cobol collation_catalog collation_name collation_schema collect column_name columns command_function command_function_code comment comments committed concurrently condition_number configuration conflict connection_name constant constraint_catalog constraint_name constraint_schema contains content control conversion convert copy corr cost covar_pop covar_samp csv cume_dist current_catalog current_row current_schema cursor_name database datalink datatype datetime_interval_code datetime_interval_precision db debug defaults defined definer degree delimiter delimiters dense_rank depends derived detach detail dictionary disable discard dispatch dlnewcopy dlpreviouscopy dlurlcomplete dlurlcompleteonly dlurlcompletewrite dlurlpath dlurlpathonly dlurlpathwrite dlurlscheme dlurlserver dlvalue document dump dynamic_function dynamic_function_code element elsif empty enable encoding encrypted end_frame end_partition endexec enforced enum errcode error event every exclude excluding exclusive exp explain expression extension extract family file filter final first_value flag floor following force foreach fortran forward frame_row freeze fs functions fusion g generated granted greatest groups handler header hex hierarchy hint id ignore ilike immediately immutable implementation implicit import include including increment indent index indexes info inherit inherits inline insensitive instance instantiable instead integrity intersection invoker isnull k key_member key_type label lag last_value lead leakproof least length library like_regex link listen ln load location lock locked log logged lower m mapping matched materialized max max_cardinality maxvalue member merge message message_length message_octet_length message_text min minvalue mod mode more move multiset mumps name namespace nfc nfd nfkc nfkd nil normalize normalized nothing notice notify notnull nowait nth_value ntile nullable nullif nulls number occurrences_regex octet_length octets off offset oids operator options ordering others over overlay overriding owned owner p parallel parameter_mode parameter_name parameter_ordinal_position parameter_specific_catalog parameter_specific_name parameter_specific_schema parser partition pascal passing passthrough password percent percent_rank percentile_cont percentile_disc perform period permission pg_context pg_datatype_name pg_exception_context pg_exception_detail pg_exception_hint placing plans pli policy portion position position_regex power precedes preceding prepared print_strict_params procedural procedures program publication query quote raise range rank reassign recheck recovery refresh regr_avgx regr_avgy regr_count regr_intercept regr_r2 regr_slope regr_sxx regr_sxy regr_syy reindex rename repeatable replace replica requiring reset respect restart restore result_oid returned_cardinality returned_length returned_octet_length returned_sqlstate returning reverse routine_catalog routine_name routine_schema routines row_count row_number rowtype rule scale schema_name schemas scope scope_catalog scope_name scope_schema security selective self sensitive sequence sequences serializable server server_name setof share show simple skip slice snapshot source specific_name sqlcode sqlerror sqrt stable stacked standalone statement statistics stddev_pop stddev_samp stdin stdout storage strict strip structure style subclass_origin submultiset subscription substring substring_regex succeeds sum symmetric sysid system system_time t table_name tables tablesample tablespace temp template ties token top_level_count transaction_active transactions_committed transactions_rolled_back transform transforms translate translate_regex trigger_catalog trigger_name trigger_schema trim trim_array truncate trusted type types uescape unbounded uncommitted unencrypted unlink unlisten unlogged unnamed untyped upper uri use_column use_variable user_defined_type_catalog user_defined_type_code user_defined_type_name user_defined_type_schema vacuum valid validate validator value_of var_pop var_samp varbinary variable_conflict variadic verbose version versioning views volatile warning whitespace width_bucket window within wrapper xmlagg xmlattributes xmlbinary xmlcast xmlcomment xmlconcat xmldeclaration xmldocument xmlelement xmlexists xmlforest xmliterate xmlnamespaces xmlparse xmlpi xmlquery xmlroot xmlschema xmlserialize xmltable xmltext xmlvalidate yes",types:h+"bigint int8 bigserial serial8 varbit bool box bytea cidr circle precision float8 inet int4 json jsonb line lseg macaddr macaddr8 money numeric pg_lsn point polygon float4 int2 smallserial serial2 serial serial4 text timetz timestamptz tsquery tsvector txid_snapshot uuid xml"}),F="accessible algorithm analyze asensitive authors auto_increment autocommit avg avg_row_length binlog btree cache catalog_name chain change changed checkpoint checksum class_origin client_statistics coalesce code collations columns comment committed completion concurrent consistent contains contributors convert database databases day_hour day_microsecond day_minute day_second delay_key_write delayed delimiter des_key_file dev_pop dev_samp deviance directory disable discard distinctrow div dual dumpfile enable enclosed ends engine engines enum errors escaped even event events every explain extended fast field fields flush force found_rows fulltext grants handler hash high_priority hosts hour_microsecond hour_minute hour_second ignore ignore_server_ids import index index_statistics infile innodb insensitive insert_method install invoker iterate keys kill linear lines list load lock logs low_priority master master_heartbeat_period master_ssl_verify_server_cert masters max max_rows maxvalue message_text middleint migrate min min_rows minute_microsecond minute_second mod mode modify mutex mysql_errno no_write_to_binlog offline offset one online optimize optionally outfile pack_keys parser partition partitions password phase plugin plugins prev processlist profile profiles purge query quick range read_write rebuild recover regexp relaylog remove rename reorganize repair repeatable replace require resume rlike row_format rtree schedule schema_name schemas second_microsecond security sensitive separator serializable server share show slave slow snapshot soname spatial sql_big_result sql_buffer_result sql_cache sql_calc_found_rows sql_no_cache sql_small_result ssl starting starts std stddev stddev_pop stddev_samp storage straight_join subclass_origin sum suspend table_name table_statistics tables tablespace terminated triggers truncate uncommitted uninstall unlock upgrade use use_frm user_resources user_statistics utc_date utc_time utc_timestamp variables views warnings xa xor year_month zerofill",G=h+"bool blob long longblob longtext medium mediumblob mediumint mediumtext tinyblob tinyint tinytext text bigint int1 int2 int3 int4 int8 float4 float8 varbinary varcharacter precision datetime unsigned signed",Y="charset clear edit ego help nopager notee nowarning pager print prompt quit rehash source status system tee",yt=m.define({operatorChars:"*+-%<>!=&|^",charSetCasts:!0,doubleQuotedStrings:!0,unquotedBitLiterals:!0,hashComments:!0,spaceAfterDashes:!0,specialVar:"@?",identifierQuotes:"`",keywords:_+"group_concat "+F,types:G,builtin:Y}),kt=m.define({operatorChars:"*+-%<>!=&|^",charSetCasts:!0,doubleQuotedStrings:!0,unquotedBitLiterals:!0,hashComments:!0,spaceAfterDashes:!0,specialVar:"@?",identifierQuotes:"`",keywords:_+"always generated groupby_concat hard persistent shutdown soft virtual "+F,types:G,builtin:Y}),xt=m.define({keywords:_+"trigger proc view index for add constraint key primary foreign collate clustered nonclustered declare exec go if use index holdlock nolock nowait paglock pivot readcommitted readcommittedlock readpast readuncommitted repeatableread rowlock serializable snapshot tablock tablockx unpivot updlock with",types:h+"bigint smallint smallmoney tinyint money real text nvarchar ntext varbinary image hierarchyid uniqueidentifier sql_variant xml",builtin:"binary_checksum checksum connectionproperty context_info current_request_id error_line error_message error_number error_procedure error_severity error_state formatmessage get_filestream_transaction_context getansinull host_id host_name isnull isnumeric min_active_rowversion newid newsequentialid rowcount_big xact_state object_id",operatorChars:"*+-%<>!=^&|/",specialVar:"@"}),Ot=m.define({keywords:_+"abort analyze attach autoincrement conflict database detach exclusive fail glob ignore index indexed instead isnull notnull offset plan pragma query raise regexp reindex rename replace temp vacuum virtual",types:h+"bool blob long longblob longtext medium mediumblob mediumint mediumtext tinyblob tinyint tinytext text bigint int2 int8 unsigned signed real",builtin:"auth backup bail changes clone databases dbinfo dump echo eqp explain fullschema headers help import imposter indexes iotrace lint load log mode nullvalue once print prompt quit restore save scanstats separator shell show stats system tables testcase timeout timer trace vfsinfo vfslist vfsname width",operatorChars:"*+-%<>!=&|/~",identifierQuotes:'`"',specialVar:"@:?$"}),wt=m.define({keywords:"add all allow alter and any apply as asc authorize batch begin by clustering columnfamily compact consistency count create custom delete desc distinct drop each_quorum exists filtering from grant if in index insert into key keyspace keyspaces level limit local_one local_quorum modify nan norecursive nosuperuser not of on one order password permission permissions primary quorum rename revoke schema select set storage superuser table three to token truncate ttl two type unlogged update use user users using values where with writetime infinity NaN",types:h+"ascii bigint blob counter frozen inet list map static text timeuuid tuple uuid varint",slashComments:!0}),Qt=m.define({keywords:_+"abort accept access add all alter and any arraylen as asc assert assign at attributes audit authorization avg base_table begin between binary_integer body by case cast char_base check close cluster clusters colauth column comment commit compress connected constant constraint crash create current currval cursor data_base database dba deallocate debugoff debugon declare default definition delay delete desc digits dispose distinct do drop else elseif elsif enable end entry exception exception_init exchange exclusive exists external fast fetch file for force form from function generic goto grant group having identified if immediate in increment index indexes indicator initial initrans insert interface intersect into is key level library like limited local lock log logging loop master maxextents maxtrans member minextents minus mislabel mode modify multiset new next no noaudit nocompress nologging noparallel not nowait number_base of off offline on online only option or order out package parallel partition pctfree pctincrease pctused pls_integer positive positiven pragma primary prior private privileges procedure public raise range raw rebuild record ref references refresh rename replace resource restrict return returning returns reverse revoke rollback row rowid rowlabel rownum rows run savepoint schema segment select separate set share snapshot some space split sql start statement storage subtype successful synonym tabauth table tables tablespace task terminate then to trigger truncate type union unique unlimited unrecoverable unusable update use using validate value values variable view views when whenever where while with work",builtin:"appinfo arraysize autocommit autoprint autorecovery autotrace blockterminator break btitle cmdsep colsep compatibility compute concat copycommit copytypecheck define echo editfile embedded feedback flagger flush heading headsep instance linesize lno loboffset logsource longchunksize markup native newpage numformat numwidth pagesize pause pno recsep recsepchar repfooter repheader serveroutput shiftinout show showmode spool sqlblanklines sqlcase sqlcode sqlcontinue sqlnumber sqlpluscompatibility sqlprefix sqlprompt sqlterminator suffix tab term termout timing trimout trimspool ttitle underline verify version wrap",types:h+"ascii bfile bfilename bigserial bit blob dec long number nvarchar nvarchar2 serial smallint string text uid varchar2 xml",operatorChars:"*/+-%<>!=~",doubleQuotedStrings:!0,charSetCasts:!0,plsqlQuotingMechanism:!0});export{wt as Cassandra,xt as MSSQL,kt as MariaSQL,yt as MySQL,Qt as PLSQL,vt as PostgreSQL,m as SQLDialect,Ot as SQLite,L as StandardSQL,Me as keywordCompletion,We as keywordCompletionSource,Fe as schemaCompletion,Ke as schemaCompletionSource,bt as sql};
//# sourceMappingURL=iple2jvib7f22swe.js.map
