import React, { useState } from "react";
import { BTCAddresses } from "./../config/config";

let number = 0;

const Home = () => {
  const [data, setData] = useState([]);
  const [sum, setSum] = useState(0);

  const fetchBalances = (addresses) => {
    let key = 0;
    const interval = setInterval(async () => {
      if (number === BTCAddresses.length) {
        clearInterval(interval);
        return;
      }


      try {
        const address = addresses[key].Address;
        const myAddress = await fetch(`/mempool/address/${address}`);
        if (myAddress.satus === 429) {
          fetchBalances(BTCAddresses.slice(number === 0 ? 0 : number - 1));
          clearInterval(interval);
        } else {
          const json = await myAddress.json();
          const balance =
            (Number(json.chain_stats.funded_txo_sum) -
              Number(json.chain_stats.spent_txo_sum)) /
            100000000;
          setData((data) => [
            ...data,
            { [json.address]: balance * 34748.5 },
          ]);
          setSum((i) => i + balance * 34748.5);
          key += 1;
          number += 1;
        }
      } catch (error) {
      }
    }, 500);
  };

  const test = [
    { bc1qc6fdwatapt2amrjcjrdcpqvq4ecqgh4yjpmxr0: 653.85626977 },
    {
      bc1pq45gaafh57rr00cy43cpaumeg7wcwgf0q0ps4ksjxx4gzvepwynq9mjlul: 653.85626977,
    },
    { bc1qqxnsdn66tugwyzq42h2g5jwcdwz6l6knp4zv7v: 5705.01637467 },
    {
      bc1pfxlnea3rxy0d4pdlu6868xm7jeq64m6j3gsx5gv73fuc80kq5xkss7dwg9: 4556.647599185,
    },
    {
      bc1pw9vf03vnhkj2u2x97pggnq7rqsnyk0yha6lfxj9dt8y25aq75kqs9hur7f: 32.385602,
    },
    {
      bc1pv0su04766ej2m5d64yge2jdrsrql4a8rz78rx38epr8akndwwmlsg80jnl: 158.510495025,
    },
    { bc1qwh256ke4g6en2547nqhp4uavn6x0pgmncp8yj4: 388.868726075 },
    { bc1qdu02467gmgalcn47zg76kn78any2puyj3uqdkn: 99.8810884 },
    {
      bc1p0sx3senyzlmudrum3vlmwp47h4905tyqm7k0qrlsjvq5zn8sqvxqacpuvg: 5498.80001148,
    },
    {
      bc1prv7qg73gh7cscp95jz5qepgxyptfus3ghmcvckde3dr63q7numgqd5z2c4: 1.891360855,
    },
    {
      bc1p9s24jwjqk80ag7sanqsjdrlu4fp388ky2me4pfdxw2rkwy0k7t3sevmxan: 753.2467093500001,
    },
    {
      bc1phvhd7ehdseqty05rqu0x5x3grdgqnn5ssvm5h257us4np0we9vzshd034v: 31.384497715,
    },
    { bc1q52kew8y6wsz4vqwz4vewql65qh34pq8tzuxfn6: 143.719448515 },
    { bc1q88g58dd6xzrqt8q2n4qn4z665drtvq6hhvrwxh: 4.23375724 },
    {
      bc1pvqkr0jlanx07ekh8qkcznpx82l8krhpv70jy8u03gzhft9ken8gszcemea: 13.00149876,
    },
    { bc1qxvar2wwel8jzpxf7dj6fpsdlphzd3fscqghnxl: 64.10264286 },
    { bc1qeywxzze44djmghgw7xefz2fufnxpfw4krtz7ng: 34.62896516 },
    { bc1q6ul86pl558xpr82mz63jhusagmcq37zxqrguvu: 1.88823349 },
    {
      bc1pqsjkzmlm2spjn6wmhq2696pqk2cxd5krrgemy38qpclp574mhkpqu6lq34: 1.842017985,
    },
    {
      bc1pulmkszuk2ehgcfsrf6hk952hhkpqk2m0vzukz79n6tuyh32epy6qvtgeag: 1.842017985,
    },
    {
      bc1p6vqjjvgm8wj96kk7np0z7yfg8djsdnqlfxz4tkxu9c8zpfx2hncqcwthma: 55.063168069999996,
    },
    { bc1qn3m2vm76yuvkk0h26u846n4kf00w9huk8kfr0e: 0 },
    { bc1qy7quy8kwuezd0cck96n2t93ng6psdwth2mw245: 92.484870175 },
    { bc1qzd3kfnrxzfhvjpm50z06fwy4dsk325qugasky3: 69.50186479 },
    { bc1q6caad7afha9qlv7kwwcgtdpstc8pmqzjyd4exh: 1133.942588225 },
    {
      bc1pczz29cvaekzny07phjg7yek8z07pgphcg8hnvv8793v8uaj046qswqyazf: 58.20443247,
    },
    {
      bc1pk87z579hdc3pc8mhqh7t8r4mjd70eeyvu9ssmu5slz4gjyc5pnqsx72sd7: 5.58130407,
    },
    {
      bc1pd42zyclu5vrstzy9g9h5udatmh34ta3jpkqtcxths752pp0k8ypqg6ec2h: 1990.90418798,
    },
    {
      bc1p4fwgr3u35nyfk5cnvj6s806njde073qlzausg3n7auf8m0akgjwqzj78ww: 74.32078677,
    },
    { bc1q262taczswtmltvr5lq0nspthkthzz4934wa9xx: 124.61715561 },
    {
      bc1pjh2l2uk2fpjv0ud4zkyrsl8lmendeqyrgeg26h2582e22msjlwesvjgqu0: 1.7895477499999999,
    },
    { bc1qh5wx3rq4q9t5j5ny8p4kddvecsgh0q062jtpsj: 2466.4978728700003 },
    { bc1qwnmcyw5pnfkfx59khanmzr8txw9qqyracn5ttr: 1.792675115 },
    {
      bc1p4fwgr3u35nyfk5cnvj6s806njde073qlzausg3n7auf8m0akgjwqzj78ww: 1.4552671799999999,
    },
    { bc1q7m34stz9qf8gssl6le9aucf6nk8tq5lpchl4qd: 124.61715561 },
    {
      bc1ptj68xe8q0juy7zvh0n9x62jz8pzlexh2u38yfyxv5fjwm3y308ms6qm6wz: 1995.927083655,
    },
    {
      bc1pt0mqsm3fl6ef9vk6ppksh8y0233npuky7vfvqwnvaylvaf7j7uls90fq3k: 24698.653152565,
    },
    { bc1qlypaedqsp2ve8ax6etx7qytta7pm7gqx5ay9nk: 45.89303892 },
    {
      bc1pddddm02atqsdljwf4jgxxf3ut2qxpvwhkwa4jk0vr77pajdh3wcqd0ylst: 1.64499399,
    },
    {
      bc1pg4wfw8a6dxc59srvvlwvsekcyczl293eg0mf09jlsge23wx9ncdsu76vp7: 272.61727184,
    },
    {
      bc1puvlwmtc07wkfx252rxx7wxgjwkp3r8aqp0fvy50yrq4anpdus3zsxgpe6f: 237.842015495,
    },
    { bc1qzlw9j68hq7yeqp25522rmwfz7n3r8yzt88nnmw: 25.468218105000002 },
    {
      bc1psujygapmz6x0juqzptwukgdrsem2r58x6xzvsluf384r4zlx58qq5czknt: 1.59982094,
    },
    { bc1q4a4rq4zapyaq2syr7kug80lx068tyxqfudhtpv: 34.957338485 },
    {
      bc1p2pg9j5twrzzlm664k27wlrrkq8pra2cr7trh5xqdk29r25yggkgq9jfzhe: 0.18972681,
    },
    {
      bc1pakf3fk536qk0xcwdv363jqpxnjelsjaa7j5dmcadmptr7g0dpnpqfwn23d: 178.112123875,
    },
    { bc1qh74hpq7cd7mtpsmswdjv603c0jpp7x6qxuuv52: 38.400567349999996 },
    {
      bc1p6mr0ymfd8hvt94f89yetq96nqs38j2sjnxry3k6ag20p6je6yvvsmpcf0z: 176.531067125,
    },
    {
      bc1pnp7papptqyk4ex6l7japgtzd6p9qu4yh4yraluq2gvtyjvfg9yns7yzrvk: 4.977027655,
    },
    { bc1qdjk6xlr9l90vtxq3vn44j7u4f553nge6fhcslf: 125.516099305 },
    { bc1q4q4qw3lm0hgrq5avqlvv08zfl7z2psqp0upc08: 157.94861178 },
    {
      bc1pj8hsg343e8e7hrt0rj7ty392zdrcl9yl6jg4qm7mml4p7yxfp2esk3l4uw: 1.59217627,
    },
    { bc1qten6kjq4w2lc8l9v932rv0wvgzj5kw7s4nzdfu: 49.724408530000005 },
    { bc1qxl87als5vte5p4fx03amec5zx3pcuhcwthenpx: 1.64151914 },
    {
      bc1pu349c0fvmqnv5s0aj3aracrsvn696hzhuyyukn6r5c9h03y88plql53h5h: 1.64151914,
    },
    {
      bc1pdr5tchft780e65cyngy8vjvhx38htwhtnjp6gjtm0emz5234t96qnmegma: 952.00048468,
    },
    {
      bc1pse6azpl0h9y8efmv5hkvfkyh55w4tundqace8uvlexfnvymzywksunzzee: 963.22980994,
    },
    {
      bc1pntsf4pn6x2y0y7wm5xygvlm9e5hmtrkexxsn9epargqtglh4kc3sw7lw27: 0.693232575,
    },
    { bc1q2n2jys28cjj3ewm3wy9g7tdusss57m76v024nz: 771.984837975 },
    {
      bc1plqmcaanfjzgwzxcl99zc6r8y6fzytv0l7xlgxqhf9hlldq08m7sqnmw7zt: 61.0600642,
    },
    {
      bc1pt9cr4uu0r35ccpm9yeqjv6k8yjlkgw9vckleeq5jqvwhr5tdtv6sl75tfr: 20.79767222,
    },
    { bc1qnhl0ctjtj4e959zms9dxvmfwl2a80mqktamkt5: 963.22980994 },
    {
      bc1pfkntm67uhg55faw54eekfmcxpjhf3dj49al55ufpfzz70p2rfkcsn9kla3: 5.376635405,
    },
    { bc1qf3tl5hltwktl7xcttdfpn5hjml4jm7rq0cuydy: 31.255928264999998 },
    {
      bc1pyvtecxncgykkk6e9yxe42drmnvwvfwsppk0gw9ja9eyc8zf2e64q0c26qe: 193.29061616,
    },
    { "3MuR31hjkgn81EScJABsQ56LsHBKb7DWhD": 10.187565229999999 },
    {
      bc1p9q2dlgf9q6ur8dpwtthhyj9khv7c70vm68qvl5av9tws2f8nf0pstyj08z: 120.87057234000001,
    },
    { bc1q3f97wymm4lgdv8s9x2hqw0scy3nhcu4zcs9u35: 219.29639356 },
    { bc1q7xkdg9sg3w3mg0kxrn9x9m98mv982szfc5seqn: 11.3836086 },
    {
      bc1puzy3668ntt5j3qszag2ghyl0xc0use9h8vr3n8rhaqleqphe6lks4l04sg: 295.36433491,
    },
    {
      bc1pnh29hydjunljs8wmsy9mr366vff7gyldhfu7s8eduy4hz9yumesssz3a89: 22.838104140000002,
    },
    {
      bc1pcyvwshrnz9mednldwfukwpdh65wc3p70rz3ehq6pajdqxe4w2gvqz7j04k: 142.05464788,
    },
    {
      bc1pduw3dcf52v0xgjcxgps7jlc8pc4y75kj3cztgf5nzy2r2ktjhr7q0dazw6: 1604.30280153,
    },
    {
      bc1pl7mkhz3kc36e3lh4vdlausvg69wzf35n988ceunesy4tz6nw939su86jwr: 33.70673997,
    },
    { bc1q8gjvtcsy7m2k6ygu6t04ptltk2tprhjyv6rp8e: 168.26300903499998 },
    {
      bc1ph3hhw0vf9hxvsnenkxeny0vgzewtgaky2yzwavrfatdc8zdhrl7srn8z3q: 14.142292014999999,
    },
    {
      bc1ph3hhw0vf9hxvsnenkxeny0vgzewtgaky2yzwavrfatdc8zdhrl7srn8z3q: 743.2912640999999,
    },
    { bc1q6q4yzal0k5695ltz5dvj6lslqkuwumxluh2rae: 743.2912640999999 },
    {
      bc1ppg9xg74dgsg2masgk4vrnurmg9tnkyre3hcwhjxy9zc3uaanl7yqcf0al3: 764.39541809,
    },
    {
      bc1pdv3dm3afr2suf3py8z8scn7f76gggl94a9vdz63dl8se5lll3jfsyv4cnx: 10.187565229999999,
    },
    {
      bc1phgrkcn4uga3qam7tmdjcnxhq09yxw83vq7vwl30hn6sft28raers3fr7c2: 184.619822955,
    },
    {
      bc1pasdaj0gmadk6anv3nmcv7528xfe5v9xya9rdwsjtzk8easd9prkql8te0q: 424.30733128500003,
    },
    {
      bc1pm25tswmugtcweg4qn8nkyzfgs229j60ksgwvmycs3j2x6sd255vqhkmyyu: 35.09945985,
    },
    {
      bc1p5rt5xqmsdk2ehzttamyqelrkvtme8mxn72mcjzt0suht5lhxcp4snlj4eh: 579.80165651,
    },
    {
      bc1pf5r0y7gzusd22ylz5g3wg0qw5w8r808ww44h5u5g254gy53895gsqht2u3: 51.876730620000004,
    },
    {
      bc1pdyj3h9naad6y6hn0kn5ahxk9lr3nw68lahtzukcatfglze05yy2qq8ftdq: 101.40932743,
    },
    {
      bc1pjj43vzrkman85v8qcydv03500k8xfdqsu5l8hkk4e7thn0dxqz0q6p5lfe: 18.541799599999997,
    },
    {
      bc1ph3hhw0vf9hxvsnenkxeny0vgzewtgaky2yzwavrfatdc8zdhrl7srn8z3q: 12.153982845,
    },
    {
      bc1p6ypancn96jmq0dj4wd4cjl6vzqz436mz5pcmqvg5cnkl59afa0pquwdsfd: 743.2912640999999,
    },
    {
      bc1pcce96gdf4s4cfkc554n2rtzrtyrz8lp34e8ffuhndvr63c3yj07qydse68: 186.72036978,
    },
    {
      bc1pjj43vzrkman85v8qcydv03500k8xfdqsu5l8hkk4e7thn0dxqz0q6p5lfe: 18.766969879999998,
    },
    {
      bc1p2rep3wcjjrtq6rscw7dez2w77x2d85938grf3ejhw87j63nr77rq6ae4mc: 12.153982845,
    },
    {
      bc1pyxjykdzd3v8tkmv24xzzx9lk9vvytwewm0j0h5a9pmr8nl50gzdsmzc29x: 33.815850260000005,
    },
    {
      bc1p7urm92jhftsf4c26evswz86t6ht7p83dyka5n3yx7utqqmz6ua9sd96h5t: 193.29061616,
    },
    { bc1qxhfuk0st4gq3wgfg2hjssxxwry6yhqgush5swh: 25.726051975 },
    {
      bc1p9la02c7xz5a6ck8vt2vdfv87k4x49w8858u3qn5c6vqmsp9nr6hqpf7hy7: 37.37618157,
    },
    {
      bc1pn8wt4qyq4nze6jsuq5wzqcamgqklaxytfedlrsq0yd9ta65cspcspkrqyp: 1709.7620666349999,
    },
    {
      bc1py4m2cffy4z6lrrmftdf73fgw868wjdu03zxm0t9kqpc7yms8fllqp67jfm: 142.1352644,
    },
    {
      bc1pzhxkdsaytch5p7yv22s9z3ap4qqx4vzggqdxssqzvdg0z3cp0kpshenzk6: 73.300223325,
    },
    {
      bc1p2xnahmjcjsjq8yhakxfepcaay554tgn9swkwsz904lwg2zek3ueq2u6s8z: 519.40389872,
    },
    {
      bc1p32sew49ld3da0m6eljt8ul9dv43fktjkaf44dkmv96lp6sapr9aq8ufcad: 2327.19808607,
    },
    {
      bc1pdn4cafvvrheyj9pdqgz72wkme50qn4ta9p2tkmdlce4fnflmf73qg2lhrr: 21.381447020000003,
    },
    {
      bc1p5mv3crvxceqx24xc88ypusa4f8q5wgup6pjxdn8v6wyjr67q833sh2we66: 51.65851004,
    },
    { bc1qmn5wyt7es5xjcvz4xgx0hdmkqpa0jhgzskkpue: 3.16558835 },
    {
      bc1pjf0kvx8m3cym5z9vk8rvy00wsp8ssvx3dvzwz8msqrmtt4g4mwnq2qn4wa: 1.13836086,
    },
    {
      bc1pt8zkw5q939up5hrkl8hrgmhm9pufrhmphmnl7we6cz7drg793ekq242je2: 13.208947305,
    },
    {
      bc1pjj43vzrkman85v8qcydv03500k8xfdqsu5l8hkk4e7thn0dxqz0q6p5lfe: 67.68382327,
    },
    { bc1qnuzjua6t8327lcwhxk3dcjxwm6asyhl4lmreew: 12.153982845 },
    {
      bc1ptz49uul77whhqv9ry0fxannndkxfwme3p3hsv6854vh0lz5ee30s2qz4zm: 24.707225955,
    },
    { bc1q4cy6q4anpg2kelj32gah9lknyf9ywnq9y8pqly: 199.788933145 },
    {
      bc1pn8wt4qyq4nze6jsuq5wzqcamgqklaxytfedlrsq0yd9ta65cspcspkrqyp: 9.14094041,
    },
    {
      bc1pe7rz3jwd5cq6p4j8xt9j33l8qcyuxcefxy400nzsmt03yndzzhps87e7yk: 142.1352644,
    },
    { "33y4KHwzo7tYKfHzrkENigzhg9tpJHtwoE": 213.74601565499998 },
    {
      bc1pel4s0x9d9qf0ezlhwl00eppw93juzykfuc9dmpqf6wvlczkcr6cqamd3rw: 136.156784975,
    },
    {
      bc1p5mkv4h69ay43hdetfpd3j7v04zdaacmjwr3p3hqet6gl0yljjmgse620m3: 55.889139914999994,
    },
    {
      bc1pfpz4e0ufftkhgk53648pf9z0pjzfjvecs4aqfv93sfe3xpll9c2sl4vz38: 96.06917795000001,
    },
    {
      bc1p270ngkv4ygukumme47sragkfu9hg5rcee5yv5pjdkju3vrjglscqdqx64h: 63.867395515000005,
    },
    {
      bc1pqh9c994ep7ufthlqf5hdtujqdu6s7dkzn0txvh5tqy5hemqzjmzszc442v: 168.252237,
    },
    {
      bc1pprkuvcq5ugman8r8knsyhrqg2ynpz0desercq447auumzvsuwxmssnjj3r: 15.0391508,
    },
    {
      bc1pwesezrdna3lmpm2jrux9pl4q5nryzwph6deuefjgl5a7zc9gzjqsn9thc4: 662.199037135,
    },
    {
      bc1p3q8kk7ak0k6smw96w7crn5vm37aq4yrzkykulrz35ttx2nllnz9qa30h5s: 404.71021974,
    },
    {
      bc1pwhtsvrcwhtxkksn0hd59en27lrepwsqm2c3cqufnxpzpha86mfus74604s: 453.25387423999996,
    },
    {
      bc1pkq7mavxwta5837ns7fs0z222pl46fx092c26crdc7zgz3cy8ghpsv22ehq: 11.050717970000001,
    },
    {
      bc1psm4tammnx8fepaf29ca0hpr8hnefdzwcce3vhsa3txcz3z23eurqkwzl3n: 126.49774443,
    },
    {
      bc1p3vjflcpgvfs9257dunjy02d2uf9ysp5h09lwa0xed3emcwadl2tsvhu28y: 15667.449548019998,
    },
    {
      bc1prkts8lphr8thz5s6ggty5dcvpz0cjtcpsfdynn860xmmk65f4uwssfuv3u: 392.20284465000003,
    },
    {
      bc1paah3frlcfx0rqp87ytg535xjd06twfl70g38a6n5xrd3e2hwgrksvvvmj7: 392.20284465000003,
    },
    {
      bc1pt2rvl4kzc42ynen6kgw9wveawa8zzcys49ag9ss0rkdh6llwz7rqdv6dg5: 47.347958614999996,
    },
    {
      bc1pv8yxpz4uxwyy28zgs82deplzygzpmvzc9wruqlwtrnzhxnx8dpxshgjen9: 501.04244383500003,
    },
    {
      bc1pg4pkpwey6gyqyse8p3h37kn72gh9ext8cztqc0sduj070rgzgrmqfa4lel: 36.74167396,
    },
    { "1GvcWkpdyYEy626mcQHzoSobdry2SDcpdK": 15.197603959999999 },
    {
      bc1p3lyujc9e3crwkvlyvezuv5sctkyct05xq7dak6d39vyfrc2qtz0srp0a8h: 24.408388855,
    },
    {
      bc1p5m9pzkgtldzu20jrtnthmwrc4npg3jcsewpq98lkgh8z3lex30lswu285j: 795.6791451549999,
    },
    {
      bc1pq9eqdfkte34qfel5mndej4fhu0ndqp9gzz3e7tg3qqw4lq0g2w0s6utlt6: 7.155063635,
    },
    {
      bc1ph2q98ttxynp5tsxemwqs55kdz3r3nnlcpmmvc9hxx80gv9artayqr744sv: 168.99793981,
    },
    {
      bc1pf5mj2w74qca0huypv3geyu7l3hmg29vhvr5a2u5q8ngupmstt2yqmexx4h: 2062.83149807,
    },
    {
      bc1p2vj6v89ymdw9c87srmu7nxqxl9hra5t7e75w067v645sdhghuc8q36a93l: 301.86682171499996,
    },
    { bc1qtyu7ze4v2w3ecucpj9pflxj8fs4uckmxmgvfjs: 7.08104933 },
    {
      bc1pkz4yjm3d07agl57kjvtad8ylsqd35ynxt8l6eg6908atx54qz3mstxy96h: 4.81753204,
    },
    {
      bc1p8mgkn7csrks02n8eprq88s2jezhnc3yr638awdt8hc8y68wmqssqm6jgm5: 155.346296615,
    },
    {
      bc1pzvjmf2lkwrmz3h5jt232a8jf6yag6hrhlakxj0ezthf7c93w853q5jcxl8: 57.932004230000004,
    },
    {
      bc1phk7lkek9tlec3p37u0qt9kx675tpfnftr3nujpeluq37jmmu5alsw3zm30: 48.15030148,
    },
    { bc1qwdmduhrh8quypgqmk4wsva57zsthxyps6k92l2: 284.26670646499997 },
    {
      bc1pnkgfmv2635jn9md5zu03ulcmstn4hwkgp5zglzadjhxyxrhpyz3q3jsr6q: 1105.214613335,
    },
    { "3Jis3fYdDy5ha8h4uo4zqjbDbPsYECVMFJ": 111.77584743499999 },
    {
      bc1py333dxr72rvpl6pdc9tnf88e7gmzk47qqjshpvrw4cgwydg6pg4q5x8djz: 181.729442725,
    },
    { bc1qs8u9n3a7hs4dje53j626trdgydjhxm4mjeseah: 6.722444810000001 },
    {
      bc1p3q8kk7ak0k6smw96w7crn5vm37aq4yrzkykulrz35ttx2nllnz9qa30h5s: 145.83528468,
    },
    { bc1q3pak9e8w8lwrzfxfqemgvpd72x2t2u9s2mxe78: 44.10001632 },
    {
      bc1pz6pqy0zgqk72fxe995wslhx74suh89ysfjseyh3ywlza8za8ml8qxn6rgp: 73.8614116,
    },
    {
      bc1pqzs0c4fllgu08mpevkwmj2e5q8q7xvhjfh9gm2y3m32evq9vy6lqdys67e: 41.280175545,
    },
    {
      bc1par5hdgzyrnypvt46shf6jcu3qmhv4nyuktyh6luqd47mrldyjthsseqvdm: 139.62364282000001,
    },
    {
      bc1pt0mqsm3fl6ef9vk6ppksh8y0233npuky7vfvqwnvaylvaf7j7uls90fq3k: 344.31002955499997,
    },
    {
      bc1p0592zdxapfzk6rad67wv7nnsudghd2qhjjk24un5w95je3ngrvyq5wq45l: 1492.12352401,
    },
    { bc1qpasjj3203htl4rcept8dklmculr04r3wyyzgud: 231.40624581 },
    {
      bc1p2yaswdau6ls84uf0c2vpa6vseyq9h2gnfrn0dkmncycr3nduc54q33tck5: 28.641103639999997,
    },
    {
      bc1ppzkyksy5f99lqxunzlr6la6k7j2ejs29k7caqv6celd0v2ajq32sy6r47n: 584.83184937,
    },
    { bc1q7a40705ljfwhwexqg6cxz8t93dnamg75y2u8k9: 87.533903895 },
    { "3Qni6sRvBq8eKPPty8MhzEaRg8frX4F7zM": 63.706857445 },
    {
      bc1p2g9n637l7ppz6783ddqh2vnehx2xct40weqe3z58awcrwtnuglpqzxm2r9: 9.77544802,
    },
    {
      bc1puvr9xn6r6exmc0uemzgrsgznfphvt8j9kdln6sg5l3nzpupz4jwqkrlce0: 205.34139596,
    },
    { bc1qlezm787zcrzycyuwnepclq2r2xpsraclrgt953: 31.11519684 },
    {
      bc1p3zmtpkc9mhtmzs23ewm7yg3s8h6whurqtgnnny9mfhny7xxgs8eshasgww: 1088.15900708,
    },
    {
      bc1parjevclgxax8pzdtgck9zf80lh8g73luh2ffdhhsxjjrnrmaewhqhrraqr: 113.98550455,
    },
  ];

  return (
    <div className="container mx-auto my-10">
      <div className="flex justify-center flex-col items-center">
        <button
          className="mx-auto bg-black py-4 px-16 rounded-md border border-gray-600 shadow shadow-black transition ease-in-out hover:scale-105 cursor-pointer"
          onClick={() => fetchBalances(BTCAddresses)}
        >
          fetch Balances
        </button>
        <div className="text-center my-3 text-3xl font-semibold">
          SUM : {sum}
        </div>
        <ul>
          {data &&
            data.map((item, key) => {
              if (item[Object.keys(item)[0]] > 10000) {
                return (
                  <li className="text-red-600">
                    {Object.keys(item)[0]} : ~$ ( {item[Object.keys(item)[0]]} )
                  </li>
                );
              }

              if (item[Object.keys(item)[0]] > 5000) {
                return (
                  <li className=" text-green-600">
                    {Object.keys(item)[0]} : ~$ ({item[Object.keys(item)[0]]} )
                  </li>
                );
              }

              if (item[Object.keys(item)[0]] > 3000) {
                return (
                  <li className=" text-orange-600">
                    {Object.keys(item)[0]} : ~$ ({item[Object.keys(item)[0]]} )
                  </li>
                );
              }

              if (item[Object.keys(item)[0]] > 2000) {
                return (
                  <li className=" text-[#9333ea]">
                    {Object.keys(item)[0]} : ~$ ({item[Object.keys(item)[0]]} )
                  </li>
                );
              }

              if (item[Object.keys(item)[0]] > 1000) {
                return (
                  <li className="text-[#d97706]">
                    {Object.keys(item)[0]} : ~$ ({item[Object.keys(item)[0]]} )
                  </li>
                );
              }

              if (item[Object.keys(item)[0]] > 500) {
                return (
                  <li className="text-[#166534]">
                    {Object.keys(item)[0]} : ~$ ({item[Object.keys(item)[0]]} )
                  </li>
                );
              }

              if (item[Object.keys(item)[0]] > 100) {
                return (
                  <li className="text-[#d8d8d8]">
                    {Object.keys(item)[0]} : ~$ ({item[Object.keys(item)[0]]} )
                  </li>
                );
              }

              if (item[Object.keys(item)[0]] > 50) {
                return (
                  <li className="text-[#3c3e41]">
                    {Object.keys(item)[0]} : {item[Object.keys(item)[0]]} )
                  </li>
                );
              }
            })}
        </ul>
      </div>
    </div>
  );
};

export default Home;
