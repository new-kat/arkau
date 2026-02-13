const DICT=[
  {
    "name": "0",
    "type": "NI",
    "key": "#namespace-extract",
    "def": "Extract predicate from given namespace, making it usable without {pi}.",
    "id": "fa5t5drbrq"
  },
  {
    "name": "1",
    "type": "O",
    "key": "#def",
    "def": "Start a predicate definition.",
    "id": "mkilbshz7v"
  },
  {
    "name": "2",
    "type": "TI",
    "key": "ta",
    "def": "Digit 2",
    "id": "vhdoiu4y7b"
  },
  {
    "name": "3",
    "type": "TI",
    "key": "to",
    "def": "Digit 3",
    "id": "ht2vpalcxn"
  },
  {
    "name": "4",
    "type": "TI",
    "key": "tu",
    "def": "Digit 4",
    "id": "v6z63bfmfc"
  },
  {
    "name": "5",
    "type": "TI",
    "key": "tie",
    "def": "Digit 5",
    "id": "jxgthvv20z"
  },
  {
    "name": "6",
    "type": "TI",
    "key": "tia",
    "def": "Digit 6",
    "id": "clpqjeyf1b"
  },
  {
    "name": "7",
    "type": "TI",
    "key": "tio",
    "def": "Digit 7",
    "id": "nftvzwfter"
  },
  {
    "name": "8",
    "type": "TI",
    "key": "tiu",
    "def": "Digit 8",
    "id": "fm5zmy6i6s"
  },
  {
    "name": "9",
    "type": "TI",
    "key": "tei",
    "def": "Digit 9",
    "id": "xfkrzesgc0"
  },
  {
    "name": "ma",
    "type": "MI",
    "key": "atom",
    "def": "[E:ma] is an atom (grammar)",
    "lambda": "\ud835\udf06c \ud835\udf06e is-atom(e)",
    "notes": "Simplest non-predicate type. All more complex non-predicate types are\natoms that must additionally satisfy some properties.\n\nThere are an infinite number of atoms which have no intrinsic meaning.\nInstead we can declare that they are connected in some way using\ndefinitions.\n\nCan also be used alone for tautology (always true), since there exist at\nleast one atom.\n",
    "id": "uiwim2580z"
  },
  {
    "name": "mai",
    "type": "MI",
    "key": "exists",
    "def": "[E:p] exists.",
    "lambda": "\ud835\udf06c \ud835\udf06e \u22a4",
    "notes": "Binding the [E] place multiple time allows to express equality/equivalence.\nCan also be used alone for tautology (always true).",
    "id": "uwjxg46v4h"
  },
  {
    "name": "mao",
    "type": "MI",
    "key": "nary-imply",
    "def": "All arguments satisfy predicate [A:p] if they satisfy predicate [O:p] (default: always true).",
    "lambda": "\ud835\udf06c \ud835\udf06e \ud835\udf06A \ud835\udf06O \u2200x \u2200y ... O(c,x,y,...) \u21d2 A(c,x,y,...)",
    "notes": "With default [O] it corresponds to universal quantification of all arguments of [A].\\\n\ud835\udf06c \ud835\udf06e \ud835\udf06A \u2200x \u2200y ... A(c,x,y,...)\n",
    "id": "qzpxweephx"
  },
  {
    "name": "mae",
    "type": "MI",
    "key": "partial-appl:",
    "def": "[E:(...)] is equivalent to [A:(p,...)] with first slot filled with [O:p].",
    "lambda": "\ud835\udf06c \ud835\udf06E \ud835\udf06A \ud835\udf06o \u2200x \u2200y ... E(x,y,...) \u21d4 A(o,x,y,...)",
    "id": "k9n5jsy7np"
  },
  {
    "name": "mui",
    "type": "MI",
    "key": "unknown",
    "def": "Always returns the \"unknown\" truth value.",
    "lambda": "\ud835\udf06c unknown",
    "id": "yftgrzjtiw"
  },
  {
    "name": "mue",
    "type": "MI",
    "key": "context-extract",
    "def": "[E:ma] is the current context.\n",
    "lambda": "\ud835\udf06c \ud835\udf06e c=e",
    "notes": "Exposes the context, an implicit/hidden argument to every predicate, as\nan explicit parameter. Allows to handle the context like any other argument.\n",
    "id": "asdzumonex"
  },
  {
    "name": "mua",
    "type": "MI",
    "key": "context-apply:",
    "def": "True if context [E:ma] makes [A:()] true.",
    "lambda": "\ud835\udf06c \ud835\udf06e \ud835\udf06A A(e)",
    "notes": "Evaluate a proposition with a provided context instead of the implicit\nforwarded context.\n",
    "id": "t98puegdx0"
  },
  {
    "name": "ba",
    "type": "BA",
    "key": "#scope-arg-generic",
    "def": "Inline atom/generic argument marker.",
    "id": "v47til8m74"
  },
  {
    "name": "bai",
    "type": "BA",
    "key": "#sentence-arg-generic",
    "def": "Sentence inline atom/generic argument marker.",
    "id": "fwel577l5k"
  },
  {
    "name": "bahi",
    "type": "BA",
    "key": "#scope-arg-transitive",
    "def": "Inline transitive predicate argument marker.",
    "id": "vnuzs4uzpz"
  },
  {
    "name": "baihi",
    "type": "BA",
    "key": "#sentence-arg-transitive",
    "def": "Sentence inline transitive predicate argument marker.",
    "id": "c1i642artq"
  },
  {
    "name": "bahe",
    "type": "BA",
    "key": "#scope-arg-intransitive",
    "def": "Inline intransitive predicate argument marker.",
    "id": "c8bgs5yx9k"
  },
  {
    "name": "baihe",
    "type": "BA",
    "key": "#sentence-arg-intransitive",
    "def": "Sentence inline intransitive predicate argument marker.",
    "id": "m5yaqq2smv"
  },
  {
    "name": "vei",
    "type": "VEI",
    "key": "]",
    "def": "Close the latest unclosed VI/FI.",
    "id": "dgx3rzqk2s"
  },
  {
    "name": "vi",
    "type": "VI",
    "key": "&[",
    "def": "State the following 0-ary predicate chain, unrelated to any place.",
    "id": "f29bns2aei"
  },
  {
    "name": "ve",
    "type": "VI",
    "key": "E[",
    "def": "The E place of the suffixed predicate is shared with the following predicate\nchain.\n",
    "notes": "The following predicate chain is a property over the variable used in the\nsuffixed predicate E place.\n",
    "id": "jbhdi1yp6a"
  },
  {
    "name": "va",
    "type": "VI",
    "key": "A[",
    "def": "The A place of the suffixed predicate is shared with the following predicate\nchain.\n",
    "notes": "The following predicate chain is a property over the variable used in the\nsuffixed predicate A place.\n",
    "id": "zflv7yegal"
  },
  {
    "name": "vo",
    "type": "VI",
    "key": "O[",
    "def": "The O place of the suffixed predicate is shared with the following predicate\nchain.\n",
    "notes": "The following predicate chain is a property over the variable used in the\nsuffixed predicate O place.\n",
    "id": "iwknbmwwuw"
  },
  {
    "name": "vu",
    "type": "VI",
    "key": "U[",
    "def": "The U place of the suffixed predicate is shared with the following predicate\nchain.\n",
    "notes": "The following predicate chain is a property over the variable used in the\nsuffixed predicate U place.\n",
    "id": "bfqny28gid"
  },
  {
    "name": "vie",
    "type": "VI",
    "key": "E=[",
    "def": "The E place of the suffixed predicate is equivalent to the following\npredicate chain.\n",
    "notes": "The following predicate chain have the same type as the E place and is\nequivalent. The E place must be a predicate place.\n",
    "id": "f5qpoxyo34"
  },
  {
    "name": "via",
    "type": "VI",
    "key": "A=[",
    "def": "The A place of the suffixed predicate is equivalent to the following\npredicate chain.\n",
    "notes": "The following predicate chain have the same type as the A place and is\nequivalent. The A place must be a predicate place.\n",
    "id": "yq567wlm2t"
  },
  {
    "name": "vio",
    "type": "VI",
    "key": "O=[",
    "def": "The O place of the suffixed predicate is equivalent to the following\npredicate chain.\n",
    "notes": "The following predicate chain have the same type as the O place and is\nequivalent. The O place must be a predicate place.\n",
    "id": "glcyqfkkoq"
  },
  {
    "name": "viu",
    "type": "VI",
    "key": "U=[",
    "def": "The U place of the suffixed predicate is equivalent to the following\npredicate chain.\n",
    "notes": "The following predicate chain have the same type as the U place and is\nequivalent. The U place must be a predicate place.\n",
    "id": "ce345k1ke4"
  },
  {
    "name": "voi",
    "type": "VI",
    "key": "adv[",
    "def": "Starts adverbial/sharing-bound prepositional clause.",
    "notes": "Followed by a single predicate P, and any following predicates (if any) form chain C.\n\nP must have a predicate [A] slot that will evaluate the predicate {voi} is attached to. Other\nbindings of that predicate are evaluated outside of that [A] slot. \n\nChain C will be sharing-bound to the [E] slot of P.\n\nThis inversed slot order allows to use (without {SI}) transitive equivalence words that can be used outside of {voi}.\nBoth [E] and [A] slot can be changed using {SI}, but be careful to respect the correct order: first exposed slot\nis bound to C, while second exposed slot wraps the attached to predicate.\n",
    "id": "wvdkovz6eg"
  },
  {
    "name": "vioi",
    "type": "VI",
    "key": "adv=[",
    "def": "Starts adverbial/equivalence-bound prepositional clause.",
    "notes": "Followed by a single predicate P, and any following predicates (if any) form chain C.\n\nP must have a predicate [A] slot that will evaluate the predicate {voi} is attached to. Other\nbindings of that predicate are evaluated outside of that [A] slot. \n\nChain C will be equivalence-bound to the [E] slot of P.\n\nThis inversed slot order allows to use (without {SI}) transitive equivalence words that can be used outside of {voi}.\nBoth [E] and [A] slot can be changed using {SI}, but be careful to respect the correct order: first exposed slot\nis bound to C, while second exposed slot wraps the attached to predicate.\n",
    "id": "wezusxq6te"
  },
  {
    "name": "fi",
    "type": "FI",
    "key": "]&[",
    "def": "State the following predicate chain, unrelated to any place.",
    "id": "kd9qbtxtq0"
  },
  {
    "name": "fe",
    "type": "FI",
    "key": "]E[",
    "def": "The E place of the predicate suffixed with latest non-closed VI is shared\nwith the following predicate chain.\n",
    "notes": "The following predicate chain is a property over the variable used in the\nsuffixed predicate E place.\n",
    "id": "vyrnf5aysv"
  },
  {
    "name": "fa",
    "type": "FI",
    "key": "]A[",
    "def": "The A place of the predicate suffixed with latest non-closed VI is shared\nwith the following predicate chain.\n",
    "notes": "The following predicate chain is a property over the variable used in the\nsuffixed predicate A place.\n",
    "id": "qxgljpgy5n"
  },
  {
    "name": "fo",
    "type": "FI",
    "key": "]O[",
    "def": "The O place of the predicate suffixed with latest non-closed VI is shared\nwith the following predicate chain.\n",
    "notes": "The following predicate chain is a property over the variable used in the\nsuffixed predicate O place.\n",
    "id": "ioz2vm2anw"
  },
  {
    "name": "fu",
    "type": "FI",
    "key": "]U[",
    "def": "The U place of the predicate suffixed with latest non-closed VI is shared\nwith the following predicate chain.\n",
    "notes": "The following predicate chain is a property over the variable used in the\nsuffixed predicate U place.\n",
    "id": "ydlpoaeiyz"
  },
  {
    "name": "fie",
    "type": "FI",
    "key": "]E=[",
    "def": "The E place of the predicate suffixed with latest non-closed VI is equivalent\nto the following predicate chain.\n",
    "notes": "The following predicate chain have the same type as the E place and is\nequivalent. The E place must be a predicate place.\n",
    "id": "yth6gftm5i"
  },
  {
    "name": "fia",
    "type": "FI",
    "key": "]A=[",
    "def": "The A place of the predicate suffixed with latest non-closed VI is equivalent\nto the following predicate chain.\n",
    "notes": "The following predicate chain have the same type as the A place and is\nequivalent. The A place must be a predicate place.\n",
    "id": "0uktfjuhwa"
  },
  {
    "name": "fio",
    "type": "FI",
    "key": "]O=[",
    "def": "The O place of the predicate suffixed with latest non-closed VI is equivalent\nto the following predicate chain.\n",
    "notes": "The following predicate chain have the same type as the O place and is\nequivalent. The O place must be a predicate place.\n",
    "id": "oasxkhx46g"
  },
  {
    "name": "fiu",
    "type": "FI",
    "key": "]U=[",
    "def": "The U place of the predicate suffixed with latest non-closed VI is equivalent\nto the following predicate chain.\n",
    "notes": "The following predicate chain have the same type as the U place and is\nequivalent. The U place must be a predicate place.\n",
    "id": "ggbu5esdez"
  },
  {
    "name": "feu",
    "type": "FI",
    "key": "]same[",
    "def": "The same place as the latest VI/FI, of the predicate suffixed with latest\nnon-closed VI, is shared with the following predicate chain.\n",
    "id": "xfm9dl3n9d"
  },
  {
    "name": "fau",
    "type": "FI",
    "key": "]next[",
    "def": "The next place as the latest VI/FI, of the predicate suffixed with latest\nnon-closed VI, is shared with the following predicate chain.\n",
    "id": "7fyf7dhb24"
  },
  {
    "name": "fei",
    "type": "FI",
    "key": "]same=[",
    "def": "The same place as the latest VI/FI, of the predicate suffixed with latest\nnon-closed VI, is equivalent to the following predicate chain.\n",
    "id": "0ed0lr14i6"
  },
  {
    "name": "fai",
    "type": "FI",
    "key": "]next=[",
    "def": "The next place as the latest VI/FI, of the predicate suffixed with latest\nnon-closed VI, is equivalent to with the following predicate chain.\n",
    "id": "v92a3mw2kl"
  },
  {
    "name": "foi",
    "type": "FI",
    "key": "]adv[",
    "def": "Starts adverbial/sharing-bound prepositional clause.",
    "notes": "Followed by a single predicate P, and any following predicates (if any) form chain C.\n\nP must have a predicate [A] slot that will evaluate the predicate {voi} is attached to. Other\nbindings of that predicate are evaluated outside of that [A] slot. \n\nChain C will be sharing-bound to the [E] slot of P.\n\nThis inversed slot order allows to use (without {SI}) transitive equivalence words that can be used outside of {voi}.\nBoth [E] and [A] slot can be changed using {SI}, but be careful to respect the correct order: first exposed slot\nis bound to C, while second exposed slot wraps the attached to predicate.\n",
    "id": "0rc4mfpym6"
  },
  {
    "name": "fioi",
    "type": "FI",
    "key": "]adv=[",
    "def": "Starts adverbial/equivalence-bound prepositional clause.",
    "notes": "Followed by a single predicate P, and any following predicates (if any) form chain C.\n\nP must have a predicate [A] slot that will evaluate the predicate {voi} is attached to. Other\nbindings of that predicate are evaluated outside of that [A] slot. \n\nChain C will be equivalence-bound to the [E] slot of P.\n\nThis inversed slot order allows to use (without {SI}) transitive equivalence words that can be used outside of {voi}.\nBoth [E] and [A] slot can be changed using {SI}, but be careful to respect the correct order: first exposed slot\nis bound to C, while second exposed slot wraps the attached to predicate.\n",
    "id": "trurybdtxi"
  },
  {
    "name": "se",
    "type": "SI",
    "key": "<EE>",
    "def": "Expose E place, and chain to E.\n\n__Compound suffix__: makes the compound intransitive sharing.\n",
    "id": "qgxn2xhcit"
  },
  {
    "name": "sa",
    "type": "SI",
    "key": "<AA>",
    "def": "Expose A place, and chain to A.\n\n__Compound suffix__: makes the compound transitive sharing.\n",
    "id": "oricdbjcuk"
  },
  {
    "name": "sai",
    "type": "SI",
    "key": "<AA=>",
    "def": "Expose A place, and chain to A with equivalence.\n\n__Compound suffix__: makes the compound transitive equivalence.\n",
    "id": "is38dnapc7"
  },
  {
    "name": "so",
    "type": "SI",
    "key": "<OO>",
    "def": "Expose O place, and chain to O.",
    "id": "1veohtfe08"
  },
  {
    "name": "su",
    "type": "SI",
    "key": "<II>",
    "def": "Expose U place, and chain to U.",
    "id": "kkao3xh8vs"
  },
  {
    "name": "sea",
    "type": "SI",
    "key": "<EA>",
    "def": "Expose places E and A, then chain to A.",
    "id": "xdpcwhenkp"
  },
  {
    "name": "seo",
    "type": "SI",
    "key": "<EO>",
    "def": "Expose places E and O, then chain to O.",
    "id": "vxhg5a1wzo"
  },
  {
    "name": "seu",
    "type": "SI",
    "key": "<EU>",
    "def": "Expose places E and U, then chain to U.",
    "id": "z4ugiojfqh"
  },
  {
    "name": "sae",
    "type": "SI",
    "key": "<AE>",
    "def": "Expose places A and E, then chain to E.",
    "id": "rnwr8famzy"
  },
  {
    "name": "sao",
    "type": "SI",
    "key": "<AO>",
    "def": "Expose places A and O, then chain to O.",
    "id": "xoapimitmx"
  },
  {
    "name": "sau",
    "type": "SI",
    "key": "<AU>",
    "def": "Expose places A and U, then chain to U.",
    "id": "iqjs2euswn"
  },
  {
    "name": "soe",
    "type": "SI",
    "key": "<OE>",
    "def": "Expose places O and E, then chain to E.",
    "id": "zje1rsx4uk"
  },
  {
    "name": "soa",
    "type": "SI",
    "key": "<OA>",
    "def": "Expose places O and A, then chain to A.",
    "id": "rythxb2fce"
  },
  {
    "name": "sou",
    "type": "SI",
    "key": "<OU>",
    "def": "Expose places O and U, then chain to U.",
    "id": "s7zufvudfl"
  },
  {
    "name": "sue",
    "type": "SI",
    "key": "<UE>",
    "def": "Expose places U and E, then chain to E.",
    "id": "pyvknqecpo"
  },
  {
    "name": "sua",
    "type": "SI",
    "key": "<UA>",
    "def": "Expose places U and A, then chain to A",
    "id": "tqdbdmjidp"
  },
  {
    "name": "suo",
    "type": "SI",
    "key": "<UO>",
    "def": "Expose places A and O, then chain to O.",
    "id": "gewbwhd3d4"
  },
  {
    "name": "si",
    "type": "SI",
    "key": "I>>",
    "def": "Expose non places and chain to the transivity place.",
    "id": "gjqcv0bq15"
  },
  {
    "name": "sie",
    "type": "SI",
    "key": "E>>",
    "def": "Chain to the E place, and exposes all the places of the predicate\nbound to it.\n",
    "id": "r3xo7t14df"
  },
  {
    "name": "sia",
    "type": "SI",
    "key": "A>>",
    "def": "Chain to the A place, and exposes all the places of the predicate\nbound to it.\n",
    "id": "d0l5dow2kn"
  },
  {
    "name": "sio",
    "type": "SI",
    "key": "O>>",
    "def": "Chain to the O place, and exposes all the places of the predicate\nbound to it.\n",
    "id": "imysksrbhz"
  },
  {
    "name": "siu",
    "type": "SI",
    "key": "U>>",
    "def": "Chain to the U place, and exposes all the places of the predicate\nbound to it.\n",
    "id": "fec2vdxbxf"
  },
  {
    "name": "ze",
    "type": "ZI",
    "key": "#anaph",
    "def": "Refer to the variables satisfying the latest instance of this predicate word.",
    "id": "hq8iez19yn"
  },
  {
    "name": "zei",
    "type": "ZI",
    "key": "#anaph-compound",
    "def": "Refer to the variables satisfying the latest instance of a compound containing this predicate word.",
    "id": "sryho6kcbc"
  },
  {
    "name": "zeu",
    "type": "ZI",
    "key": "#anaph-context",
    "def": "Refer to the context of the latest instance of this predicate word.",
    "id": "tmcv2t25bc"
  },
  {
    "name": "zeiu",
    "type": "ZI",
    "key": "#anaph-compound-context",
    "def": "Refer to the context of the latest instance of a compound containing this predicate word.",
    "id": "9lkoyhbcef"
  },
  {
    "name": "zi",
    "type": "ZI",
    "key": "#short-neg",
    "def": "Narrow-scope negation : negates the predicate unit but not the existential variables it creates.\nThere exist e, a,... such that unit(e, a, ...) is false.\n",
    "id": "drzw8dig76"
  },
  {
    "name": "zoie",
    "type": "ZI",
    "key": "#get-default-E",
    "def": "Satisfy the default bound of the E place of [predicate] (set with {oie}).\n",
    "id": "uhlxkvwwa7"
  },
  {
    "name": "zoia",
    "type": "ZI",
    "key": "#get-default-A",
    "def": "Satisfy the default bound of the A place of [predicate] (set with {oia}).\n",
    "id": "pnlxz4xwki"
  },
  {
    "name": "zoio",
    "type": "ZI",
    "key": "#get-default-O",
    "def": "Satisfy the default bound of the O place of [predicate] (set with {oio}).\n",
    "id": "ypral6pdfc"
  },
  {
    "name": "zoiu",
    "type": "ZI",
    "key": "#get-default-U",
    "def": "Satisfy the default bound of the U place of [predicate] (set with {oiu}).\n",
    "id": "eylcna75du"
  },
  {
    "name": "zu",
    "type": "ZI",
    "key": "#instanciate-transitive",
    "def": "Instanciate the E predicate place of the prefixed predicate. Place can be\nselected by a following SI. This predicate is transitive.\n",
    "notes": "Is necessary to use a predicate stored in a KI variable (which have a\n[E:(...)] place) with arguments provided with VI/FI. It can however be\nused more broadly, for exemple with predicates that \"transforms\" a\npredicate into another one.\n\nUsing a transitive GI variable can be seen as if it was some KI variable\nwhich was then instanciated with {zu KI}.\n",
    "id": "khqauhadzn"
  },
  {
    "name": "zui",
    "type": "ZI",
    "key": "#instanciate-intransitive",
    "def": "Instanciate the E predicate place of the prefixed predicate. Place can be\nselected by a following SI. This predicate is intransitive.\n",
    "notes": "Is necessary to use a predicate stored in a KI variable (which have a\n[E:(...)] place) with arguments provided with VI/FI. It can however be\nused more broadly, for exemple with predicates that \"transforms\" a\npredicate into another one.\n\nUsing an instransitive GI variable can be seen as if it was some KI variable\nwhich was then instanciated with {zui KI}.\n",
    "id": "34z5pisibi"
  },
  {
    "name": "zue",
    "type": "ZI",
    "key": "#()-to-(p)",
    "def": "Transform an [A:()] place into an [A:(p)] place, which is provided the\ncontent of the [E:p] place. The resulting predicate is transitive.\n",
    "notes": "While a SE before {i} can still override the chaining behavior, a SE after\n{zue} allow to select which places to use for the transformation.\n\nFor 2-vowels SE variants \"sXY\", X select the entity place, while Y select\nthe proposition place. Not using a SE thus is equivalent to an implicit\n{sea}.\n\nFor 1-vowel SE variants \"sY\", it is equivalent to \"SeY\". Since it doesn't\nmake sense to use the same places for both sides, {se} is nonsensical.\n\nThe selected proposition place will be the one being transitioned to in\nchaining (unless overwritten by a SE placed before {zue}).\n",
    "id": "qrpqjlbxo6"
  },
  {
    "name": "oie",
    "type": "O",
    "key": "#set-default-E",
    "def": "Set the default constraint for the E place of the following predicate word.\n",
    "id": "kcj6ptjgvi"
  },
  {
    "name": "oia",
    "type": "O",
    "key": "#set-default-A",
    "def": "Set the default constraint for the A place of the following predicate word.\n",
    "id": "tbu1ntupmq"
  },
  {
    "name": "oio",
    "type": "O",
    "key": "#set-default-O",
    "def": "Set the default constraint for the O place of the following predicate word.\n",
    "id": "hokid2gzwm"
  },
  {
    "name": "oiu",
    "type": "O",
    "key": "#set-default-U",
    "def": "Set the default constraint for the U place of the following predicate word.\n",
    "id": "87acytzfsn"
  },
  {
    "name": "oni",
    "type": "O",
    "key": "#def-capture",
    "def": "Start a predicate definition which captures the current context.",
    "id": "c0kwgmhcwy"
  },
  {
    "name": "onu",
    "type": "O",
    "key": "#def-axiom",
    "def": "Start a predicate definition, which will immediatly considered as axiom by\nthe speaker.\nCan be used as a performative, a sentence that performs an act by the fact\nof being uttered. An interlocutor might accept this axioms with {nu} or just\nignore it, while the speaker can revert it using {ni}.\n",
    "notes": "{onu gi ...} is equivalent to {on gi ... nu gi}\n",
    "id": "7uffxtuqg2"
  },
  {
    "name": "an",
    "type": "A",
    "key": "#update-context",
    "def": "Starts a context switching sentence, such that [E:ma] will be the context\nprovided to any following sentences.\n",
    "id": "zkukmnzdxs"
  },
  {
    "name": "nu",
    "type": "NI",
    "key": "#axiom-on",
    "def": "Enable axiomatic predicate.",
    "id": "em8adaqgg3"
  },
  {
    "name": "ni",
    "type": "NI",
    "key": "#axiom-off",
    "def": "Disable axiomatic predicate.",
    "id": "jlotxmhwg4"
  },
  {
    "name": "nohu",
    "type": "NI",
    "key": "#namespace-axiom-on",
    "def": "Enable all axioms in given namespace.",
    "id": "3xu1e18wct"
  },
  {
    "name": "nohi",
    "type": "NI",
    "key": "#namespace-axiom-off",
    "def": "Disable all axioms in given namespace.",
    "id": "n6zs199o50"
  },
  {
    "name": "noi",
    "type": "NI",
    "key": "#namespace-extract-all",
    "def": "Extract all predicates from given namespace, making them usable without {pi}.",
    "id": "6zdmybfdxu"
  },
  {
    "name": "be",
    "type": "BE",
    "key": "#argument-list",
    "def": "Borrowing and arguments list terminator.",
    "id": "0hikwjp7eh"
  },
  {
    "name": "bi",
    "type": "BI",
    "key": "#wide-neg",
    "def": "Wide scope negation ranging over existential variables and predicates.",
    "id": "iqamwz7uhd"
  },
  {
    "name": "bo",
    "type": "BO",
    "key": "#new-var-atom",
    "def": "Create a new atom predicate variable and discard previous value if any.",
    "notes": "Creates a predicate stating the argument is some specific and fixed atom or\ngeneric value. The predicate thus have type (p).\n\nUsing it before words other than KI make them behave like KI variables. It\ncan thus be used to define freeform predicate variables (i-) to refer to\nan atom.\n",
    "id": "9eludeaq4v"
  },
  {
    "name": "boi",
    "type": "BO",
    "key": "#new-var-pred",
    "def": "Create a new general predicate variable and discard previous value if any.",
    "notes": "This predicate can have arbitrary arguments, which will be constrainted by\nthe rest of the sentence.\n\nWhen used before KI, have the same meaning as {bo} as all KI are expected\nto have type (p).\n",
    "id": "aeguxusum3"
  },
  {
    "name": "mi",
    "type": "MI",
    "key": "me",
    "def": "[E:tce* man] is I/me/the speaker(s)/narrator(s).",
    "notes": "At least one of the members must be the main speaker/narrator.",
    "id": "unfcuerxgm"
  },
  {
    "name": "mo",
    "type": "MI",
    "key": "you",
    "def": "[E:tce* man] is you, a listener.",
    "id": "zjytqy23pq"
  },
  {
    "name": "moe",
    "type": "MI",
    "key": "3rd-person",
    "def": "[E:tce* man] are neither speakers nor listeners",
    "id": "sdk5i13m5g"
  },
  {
    "name": "mio",
    "type": "MI",
    "key": "inclusive-we",
    "def": "Every member of [E:tco* man] is either I/a speaker/author; or you, a listener; and\ncontains at least one of each.\n",
    "id": "itsqhv9xao"
  },
  {
    "name": "mie",
    "type": "MI",
    "key": "exclusive-we",
    "def": "Every member of [E:tco* man] is either I/a speaker/author; or something that\nis neither a speaker or listener; and contains at least one of each.\n",
    "id": "9swjxu2mjz"
  },
  {
    "name": "me",
    "type": "MI",
    "key": "the",
    "def": "[E:p] is something that the speaker particularily have in mind.\n",
    "id": "ahgbyzu6xy"
  },
  {
    "name": "ji",
    "type": "JI",
    "key": "#cardinal:",
    "def": "Cardinal number terminator. The preceding number have definition:\\\n[E:tce* p] is (a group of) [number] things satisfying [A:(tca p)].\\\nThe number must be a natural number (non zero positive integer).\n",
    "id": "uqb3n5070a"
  },
  {
    "name": "jie",
    "type": "JI",
    "key": "#abstract-number",
    "def": "Abstract number terminator. The preceding number have definition:\\\n[E:tce gan] is the number [number] times [A:tce gan] (default: 1).\n",
    "id": "uvvfj77x9f"
  },
  {
    "name": "jia",
    "type": "JI",
    "key": "#raw-cardinal:",
    "def": "Raw cardinal number terminator. The preceding number have definition:\\\n[E:tce* p] is (a group of) [number] things satisfying [A:(p)].\\\nThe number must be a natural number (non zero positive integer).\n",
    "id": "dnj7gskeg7"
  },
  {
    "name": "jio",
    "type": "JI",
    "key": "#universal-cardinal:",
    "def": "Universal cardinal number terminator. The preceding number have definition:\\\n[E:tce* p] is (a group of) the only [number] things satisfying [A:(tca p)].\\\nThe number must be a natural number (non zero positive integer).\n",
    "id": "83fvb9onn2"
  },
  {
    "name": "jioa",
    "type": "JI",
    "key": "#raw-universal-cardinal:",
    "def": "Raw universal cardinal number terminator. The preceding number have definition:\\\n[E:tce* p] is (a group of) the only [number] things satisfying [A:(p)].\\\nThe number must be a natural number (non zero positive integer).\n",
    "id": "hvmxrbwgxx"
  },
  {
    "name": "jiu",
    "type": "JI",
    "key": "#ordinal",
    "def": "Ordinal number terminator. The preceding number have definition:\\\n[E:tca p] is the [number]th member of sequence [A:ebluse].\\\nIndexing is done using zero-based numbering, such as the first member is the 0th.\nThe number must be a (possibly 0) positive integer.\n",
    "notes": "See {jiune} for a similar predicate with a place for the number (which allows to ask questions\nabout it).\n\nTo speak about the last member, use {blua} to reverse the order of the list.\n",
    "id": "xtles9edl2"
  },
  {
    "name": "ju",
    "type": "JO",
    "key": "#base",
    "def": "Base separator. Base is defined using the last allowed digit.",
    "id": "pasttlpzrh"
  },
  {
    "name": "jo",
    "type": "JO",
    "key": "#frac-sep",
    "def": "Fractional part separator. Separate the integer part from the excess beyond\nthe integer part.\n",
    "id": "1hqmjyuznz"
  },
  {
    "name": "joi",
    "type": "JO",
    "key": "#frac-sep-neg",
    "def": "Negative fractional part separator. Separate the integer part from the excess beyond\nthe integer part, and indicates that the number is negative.\n",
    "id": "hop8n6mgoa"
  },
  {
    "name": "ja",
    "type": "JA",
    "key": "#repeating",
    "def": "Repeating part separator. Inside a fractional part starts a string of\ndigits that repeat infinitely.\n",
    "id": "asckk59auo"
  },
  {
    "name": "je",
    "type": "JE",
    "key": "#magnitude",
    "def": "Magnitude part separator. Number is multiplied by base^magnitude.\n",
    "id": "lxvv3shd2h"
  },
  {
    "name": "jei",
    "type": "JE",
    "key": "#magnitude-neg",
    "def": "Negative magnitude part separator. Number is multiplied by base^(-magnitude).\n",
    "id": "fkgaal9xfc"
  },
  {
    "name": "ti",
    "type": "TI",
    "key": "0",
    "def": "Digit 0",
    "id": "ivcpysqf4j"
  },
  {
    "name": "te",
    "type": "TI",
    "key": "1",
    "def": "Digit 1",
    "id": "2oobzn2l6h"
  },
  {
    "name": "ta",
    "type": "TI",
    "key": "2",
    "def": "Digit 2",
    "id": "byl153scbe"
  },
  {
    "name": "to",
    "type": "TI",
    "key": "3",
    "def": "Digit 3",
    "id": "ahfrldpv68"
  },
  {
    "name": "tu",
    "type": "TI",
    "key": "4",
    "def": "Digit 4",
    "id": "p7eyosrgae"
  },
  {
    "name": "tie",
    "type": "TI",
    "key": "5",
    "def": "Digit 5",
    "id": "mgrqxslqve"
  },
  {
    "name": "tia",
    "type": "TI",
    "key": "6",
    "def": "Digit 6",
    "id": "hwnppc9ghm"
  },
  {
    "name": "tio",
    "type": "TI",
    "key": "7",
    "def": "Digit 7",
    "id": "1mqghjrvry"
  },
  {
    "name": "tiu",
    "type": "TI",
    "key": "8",
    "def": "Digit 8",
    "id": "ghcbnijzcv"
  },
  {
    "name": "tei",
    "type": "TI",
    "key": "9",
    "def": "Digit 9",
    "id": "shcfpcezrg"
  },
  {
    "name": "tea",
    "type": "TI",
    "key": "A",
    "def": "Digit A",
    "id": "wde3jzgicf"
  },
  {
    "name": "teo",
    "type": "TI",
    "key": "B",
    "def": "Digit B",
    "id": "7ik9nhaqhb"
  },
  {
    "name": "teu",
    "type": "TI",
    "key": "C",
    "def": "Digit C",
    "id": "fykhc8yfxl"
  },
  {
    "name": "tai",
    "type": "TI",
    "key": "D",
    "def": "Digit D",
    "id": "xqnikwdrx3"
  },
  {
    "name": "tae",
    "type": "TI",
    "key": "E",
    "def": "Digit E",
    "id": "tcdujabqlx"
  },
  {
    "name": "tao",
    "type": "TI",
    "key": "F",
    "def": "Digit F",
    "id": "rvtqoqug7a"
  },
  {
    "name": "ca",
    "type": "CA",
    "key": "#quote-start",
    "def": "Starts grammatically correct eberban quote. [E:tca ecama] is text [quote].",
    "id": "qgitj7lmtu"
  },
  {
    "name": "cai",
    "type": "CAI",
    "key": "#quote-end",
    "def": "Ends grammatically correct eberban quote.",
    "id": "m2tk0zmvgh"
  },
  {
    "name": "ci",
    "type": "CI",
    "key": "#word-quote",
    "def": "Quote next word. [E:tca ecima] is the word [word].",
    "id": "qd380clfxd"
  },
  {
    "name": "cie",
    "type": "CI",
    "key": "#family-quote",
    "def": "[E:tca man] is the family of [word].",
    "id": "acauojxxsk"
  },
  {
    "name": "ce",
    "type": "CE",
    "key": "#spelling-start",
    "def": "[E:tca ecoma] is the string/list of letters encoded by [quote].",
    "notes": "Search __@S__ to only show spelling units.\n",
    "id": "yjvjupth2t"
  },
  {
    "name": "ceu",
    "type": "CE",
    "key": "#utterance-spelling-start",
    "def": "[E:tca ecoma] is the string of sounds encoded by [quote].",
    "notes": "Search __@S__ to only show spelling units.\n",
    "id": "zsud61ou1j"
  },
  {
    "name": "cei",
    "type": "CEI",
    "key": "#spelling-end",
    "def": "Character by character/spelling quote terminator",
    "id": "r0ndrlj4ft"
  },
  {
    "name": "co",
    "type": "CO",
    "key": "#foreign-quote",
    "def": "[E:tca ecoma] is a quote of an arbitrary string.",
    "id": "vdlcqmqkoi"
  },
  {
    "name": "coi",
    "type": "COI",
    "key": "#skipped-foreign-quote",
    "def": "[E:tca ecoma] is a quote of an arbitrary string which is skipped by the speaker/author.",
    "id": "j6cqu8p0dd"
  },
  {
    "name": "ra",
    "type": "RA",
    "key": "#erase-sentence",
    "def": "Erase from the start of the current sentence, including non grammatical content.\n",
    "id": "spjmtjh1al"
  },
  {
    "name": "ri",
    "type": "RI",
    "key": "#erase-chain",
    "def": "Erase from the start of the current chain.\n",
    "id": "eulm6uksj9"
  },
  {
    "name": "za",
    "type": "ZI",
    "key": "#named",
    "def": "[E:tce p] is named after the E place of the following predicate by [A:tce pan].",
    "notes": "Another place can be selected by adding a SE particle between {za} and the\npredicate.\n",
    "id": "4hiwgkyaqe"
  },
  {
    "name": "zai",
    "type": "ZI",
    "key": "#name",
    "def": "[E:tca ezaiman] is the name representing the E place of the following predicate.",
    "id": "bzmsfmniyb"
  },
  {
    "name": "a",
    "type": "A",
    "key": "#assert",
    "def": "Starts an assertive sentence, that the speaker asserts is true.",
    "notes": "{<e a ze>} allows to state again the content of the latest {a} assertion, which can be used to\nnegate it or state it in another context.\n",
    "id": "awzbv8iu8c"
  },
  {
    "name": "al",
    "type": "A",
    "key": "#request",
    "def": "Starts an injunctive/order/request sentence, that the speaker requests to be true.",
    "notes": "{<e al ze>} allows to state again the content of the latest {al} assertion, which can be used to\nnegate it or state it in another context.\n",
    "id": "ds8h6j4llp"
  },
  {
    "name": "o",
    "type": "O",
    "key": "#question",
    "def": "Start a question definition, the arguments being the unknown informations.",
    "id": "ici1wrui6g"
  },
  {
    "name": "du",
    "type": "DU",
    "key": "#chain",
    "def": "The tagged annotation refers to the annotated predicate, its binds and chaining.",
    "id": "skpy3pwmn3"
  },
  {
    "name": "duo",
    "type": "DU",
    "key": "#sentence",
    "def": "The tagged annotation refers to the entire sentence.",
    "id": "vxcswwqx5u"
  },
  {
    "name": "di",
    "type": "DI",
    "key": "#attention-focus",
    "def": "Attention focus: the listener should be extra attentive to the following word.\nMaybe it would be especially prone to confusion?\n",
    "id": "my7irg3svn"
  },
  {
    "name": "die",
    "type": "DI",
    "key": "#contrastive-focus",
    "def": "Contrastive focus: It's that thing and not something else that was expected.\n",
    "id": "qoterl6gxk"
  },
  {
    "name": "dia",
    "type": "DI",
    "key": "#newsworthiness focus",
    "def": "Newsworthiness focus: Marks the part of the sentence containing the most\nimportant new information.\n",
    "id": "safkce8biy"
  },
  {
    "name": "de",
    "type": "DE",
    "key": "#interjection",
    "def": "Attach a single predicate that acts as an interjection.",
    "id": "np9l6evbth"
  },
  {
    "name": "dei",
    "type": "DE",
    "key": "#metadata",
    "def": "Attached word is a metadata tag / hashtag.",
    "id": "fbxzqmrleb"
  },
  {
    "name": "da",
    "type": "DA",
    "key": "(",
    "def": "Starts parenthetical note.",
    "id": "1us2czwmre"
  },
  {
    "name": "dai",
    "type": "DAI",
    "key": ")",
    "def": "Ends parenthetical note.",
    "id": "cie8dryois"
  },
  {
    "name": "bu",
    "type": "BU",
    "key": ",",
    "def": "Separator between enumeration items.",
    "id": "42rwh0ztk6"
  },
  {
    "name": "pe",
    "type": "PE",
    "key": "[",
    "def": "Inline scope starter.",
    "notes": "Since it is a member of PE, {BU} can be used inside it. Each item is a predicate and all are\nstated to be true (AND operator). They share the same slots.\n\n{mi pe etiansa bu dona pei meon} = I [eat and like] an apple.\n",
    "id": "c9njzictfu"
  },
  {
    "name": "pea",
    "type": "PE",
    "key": "#set-members[",
    "def": "Makes a set from one member from each listed sets.",
    "notes": "Each member is distinct, the cardinality of the set equals the number of listed items.\n",
    "id": "gelwsldtsb"
  },
  {
    "name": "peo",
    "type": "PE",
    "key": "#atom-set[",
    "def": "Atoms/generics set separator.",
    "id": "z05feq6b63"
  },
  {
    "name": "peho",
    "type": "PE",
    "key": "#pred-set[",
    "def": "Predicates set separator.",
    "id": "lhzsdl98sk"
  },
  {
    "name": "peu",
    "type": "PE",
    "key": "#atom-list[",
    "def": "Atoms/generics list separator.",
    "id": "pyzvhbntb5"
  },
  {
    "name": "pehu",
    "type": "PE",
    "key": "#pred-list[",
    "def": "Predicates list separator.",
    "id": "6ekftp64e3"
  },
  {
    "name": "pei",
    "type": "PEI",
    "key": "}",
    "def": "Inline scope/enum elidible terminator.",
    "id": "cou785jhzz"
  },
  {
    "name": "pi",
    "type": "PI",
    "key": "::",
    "def": "Predicate namespace separator. Predicates imported from another text with\n{ohi} are accessible inside the namespace named after the word used\nafter {ohi}.\n",
    "id": "ldy5ka8k6p"
  },
  {
    "name": "po",
    "type": "PO",
    "key": "#paragraph",
    "def": "Starts paragraph/section/change of subject.",
    "notes": "When used in a text imported with {ohi}, the predicates in this paragraph\nwill be available in the namespace made by {ohi}. To make them private and\nnot available in the namespace, use {poi}.\n\nWhen used outside of an imported text, definitions of namespaced predicates\n(`on <namespace> pi <pred> ...`) will be automatically extracted by {noi}.\n",
    "id": "jjo3ibjqoy"
  },
  {
    "name": "poi",
    "type": "PO",
    "key": "#private",
    "def": "Starts a private section, whose predicates will not be available when\nimported into another text with {ohi} or not exported with {noi}.\n",
    "notes": "Predicates are usable like normal in this text, however another text\nimporting this text with {ohi} will not have access to them. To make\npredicates public and available in the namespace, use {po}.\n\nWhen used outside of an imported text, definitions of namespaced predicates\n(`on <namespace> pi <pred> ...`) will NOT be automatically extracted by\n{noi}.\n",
    "id": "19kponvnpj"
  },
  {
    "name": "ohi",
    "type": "O",
    "key": "#import",
    "def": "Imports predicates defined in Eberban text [E:tca ecama] under the name\nnamespace named after the predicate immediatly after {ohi}.\n",
    "notes": "Namespace definitions and predicate definitions are independent, and\ndefining a namespace using {ohi} will not override the same-name predicate\ndefined by other O particles.\n\nNamespaces can be nested if the imported text also uses {ohi}.\n",
    "id": "j7cwz23nkd"
  },
  {
    "name": "do",
    "type": "DO",
    "key": "#no-std",
    "def": "Disable the automatic import of the standard dictionnary.",
    "notes": "Mainly used to define the standard dictionnary itself.\n",
    "id": "to8ca3apdr"
  },
  {
    "name": "vle",
    "type": "R",
    "key": "or:",
    "def": "True if [E:()] or [A:()] or both is true.",
    "lambda": "on vle ge ga be\nbi ma\n  vi bi ge\n  fi bi ga\n",
    "id": "ysh546fklz"
  },
  {
    "name": "vlu",
    "type": "R",
    "key": "if:",
    "def": "If [E:()] is then [A:()] (default: true) is true, otherwise [O:()]\n(default: true) is true.\n",
    "lambda": "on vlu ge ga be\nvle\n  via mai\n    vi ge\n    fi ga\n    vei\n  fie mai\n    vi bi ge\n    fi go\nonia vlu mai\nonio vlu mai\n",
    "id": "eczhmrmkqd"
  },
  {
    "name": "kidvo",
    "type": "R",
    "key": "transitive-rel",
    "def": "[E:p] and [A:p] satisfy relation [O:(p,p)] transitively.\n",
    "lambda": "on kidvo ke ka go be\nvle\n  vie ke go ka\n  fia bo ki\n    vi ke go ki\n    fi ki kidvo\n      va ka\n      fio go\n",
    "id": "3sqq5pyzms"
  },
  {
    "name": "tcuhi",
    "type": "R",
    "key": "set-all-raw:",
    "def": "[E:ma] is the (non-empty) set of all things that individualy satisfy [A:(p)].\n",
    "id": "g3quw0kqyl"
  },
  {
    "name": "tcihe",
    "type": "R",
    "key": "set-member-raw",
    "def": "[E:p] is a member of set [A:tcuhi p].\n",
    "id": "rcpkbwycm6"
  },
  {
    "name": "tcia",
    "type": "R",
    "key": "subset",
    "def": "[E:tcehi p] is a subset of [A:tcehi p]. [A] is a superset of [E].\n",
    "id": "p8mdb3rcqw"
  },
  {
    "name": "tcehi",
    "type": "R",
    "key": "set-some-raw:",
    "def": "[E:tcuhi p] is a (non-empty) set of some things that individualy satisfy [A:(p)].\n",
    "id": "pwfckqjpdu"
  },
  {
    "name": "tcahi",
    "type": "R",
    "key": "set-one-raw:",
    "def": "[E:tcuhi p] is a set containing exactly one member which satisfy [A:(p)].\n",
    "id": "xemhvhqiom"
  },
  {
    "name": "tcohi",
    "type": "R",
    "key": "set-many-raw:",
    "def": "[E:tcehi p] is a set of at least 2 things that individualy satisfy [A:(p)].\n",
    "id": "zlgjmfoqtb"
  },
  {
    "name": "tca",
    "type": "R",
    "key": "set-one:",
    "def": "[E:tcahi p] is a set containing exactly one member, and satisfy [A:(tcahi p)].\n",
    "id": "8w1jwffzur"
  },
  {
    "name": "tcu",
    "type": "R",
    "key": "set-all:",
    "def": "[E:tcuhi p] is the (non-empty) set of all things that individualy satisfy [A:(tca p)].\n",
    "lambda": "on tcu ke gia be\nke tcuhi\n  via be ba tcihe tca gia\n",
    "id": "pvhoor5xeb"
  },
  {
    "name": "tce",
    "type": "R",
    "key": "set-some:",
    "def": "[E:tcehi p] is a (non-empty) set of some things that individualy satisfy [A:(tca p)].\n",
    "lambda": "on tce ke gia be\nke tcehi\n  via be ba tcihe tca gia\n",
    "id": "tqlnlqxzsn"
  },
  {
    "name": "tco",
    "type": "R",
    "key": "set-many:",
    "def": "[E:tcohi p] is a set of at least 2 things that individualy satisfy [A:(tca p)].\n",
    "lambda": "on tco ke gia be\nke tcohi\n  via be ba tcihe tca gia\n",
    "id": "sjmnh7xxpc"
  },
  {
    "name": "tcie",
    "type": "R",
    "key": "set-member",
    "def": "[E:tca p] is a member of set [A:tce p].",
    "lambda": "on tcie ke ka be\nke tca tcihe ka\n",
    "id": "fnw0vvx5ii"
  },
  {
    "name": "tcuhe",
    "type": "R",
    "key": "set-union",
    "def": "[E:tcehi p] is the union of sets in set [A:tcehi tcehi p].",
    "id": "ryx470pn2x"
  },
  {
    "name": "tcahe",
    "type": "R",
    "key": "set-choice",
    "def": "[E:tcehi p] contains exactly one member of each set in set [A:tcehi tcehi p].",
    "id": "mn82rh937u"
  },
  {
    "name": "tcuha",
    "type": "R",
    "key": "set-intersection",
    "def": "[E:tcehi p] is the intersection of sets in set [A:tcehi tcehi p].",
    "id": "2yen5k9sgq"
  },
  {
    "name": "tcuho",
    "type": "R",
    "key": "set-diff",
    "def": "[E:tce p] is the set of all things that are in [A:tce p] and not\nin [O:tce p].\n",
    "lambda": "on dja ke ka ko be\nke tcu\n  va ki be mai\n    vi ki tcie ka\n    fi bi ki tcie ko\n",
    "id": "fna9x09it8"
  },
  {
    "name": "tcihi",
    "type": "R",
    "key": "set-local-max:",
    "def": "[E:tce p] is a locally largest set that satisfy [A:(tce p)].",
    "lambda": "on djo ke gia be\nma\n  vi ke gia\n  fi bi bo ka\n    vi ka bi ke\n    fi ka gia\n    fi ke tcia ka\n",
    "id": "zkzu7uyhit"
  },
  {
    "name": "tcihu",
    "type": "R",
    "key": "set-local-min:",
    "def": "[E:tce p] is a locally smallest set that satisfy [A:(tce p)].",
    "lambda": "on djo ke gia be\nma\n  vi ke gia\n  fi bi bo ka\n    vi ka bi ke\n    fi ka gia\n    fi ka tcia ke\n",
    "id": "jw7zewcwos"
  },
  {
    "name": "man",
    "type": "R",
    "key": "atom set",
    "def": "[E:tcehi* ma] is a set of one or more atoms.",
    "id": "r7zw74om6f"
  },
  {
    "name": "kin",
    "type": "R",
    "key": "par",
    "def": "[E:ma] is a pair made of left component [A:p] and right component [O:b].\n",
    "lambda": "on e kin pi be\nma\n  vi boi kin\n  fi mae\n    ve ka be mae\n      ve ko be\n      ma\n       vi ki be ki ma kin\n         va ka\n         fo ko\n         fi bi ma\n           ve bi ki\n           fe kin\n             va ka\n             fo ko\npi e kin pi\n",
    "id": "hypka57wfp"
  },
  {
    "name": "blur",
    "type": "R",
    "key": "empty-list",
    "def": "[E:ma] is the empty list.\n",
    "id": "nro51pm4q2"
  },
  {
    "name": "blu",
    "type": "R",
    "key": "list:",
    "def": "[E:ebluse] is a list of things all satisfying [A:(p)].\n",
    "notes": "{peu} and {pehu} are syntactic sugar to make lists.\n",
    "id": "4tuaiv3x0b"
  },
  {
    "name": "bluni",
    "type": "R",
    "key": "list-lfold",
    "def": "Left folds list [E:blu p] with initial [A:b] and final [O:b] carries by\napplying predicate [U:(b,b,p)] in first to last order.\n",
    "id": "6oxelxxwxd"
  },
  {
    "name": "blunu",
    "type": "R",
    "key": "list-rfold",
    "def": "Right folds list [E:blu p] with initial [A:b] and final [O:b] carries by\napplying predicate [U:(b,b,p)] in last to first order.\n",
    "id": "zblktnj4an"
  },
  {
    "name": "bluhe",
    "type": "R",
    "key": "list-concat-2",
    "def": "[E:ebluse] is the concatenation of lists [A:ebluse] and [O:ebluse].\n",
    "id": "ghp1rirgb6"
  },
  {
    "name": "blue",
    "type": "R",
    "key": "list-concat-many",
    "def": "[E:ebluse] is the concatenation of all lists in list [A:blu ebluse].\n",
    "id": "bqqk6gqk0k"
  },
  {
    "name": "blua",
    "type": "R",
    "key": "list-reverse",
    "def": "[E:ebluse] is list [A:ebluse] in reverse order.\n",
    "id": "2wwxz8b8gr"
  },
  {
    "name": "blea",
    "type": "R",
    "key": "list-contain",
    "def": "[E:ebluse] is included/contained in [A:ebluse].\n",
    "id": "un9423gr90"
  },
  {
    "name": "bleu",
    "type": "R",
    "key": "list-set-raw",
    "def": "[E:tce p] is the set of all the elements in list [A:blu p].\n",
    "id": "zp415dp0q0"
  },
  {
    "name": "kagvin",
    "type": "R",
    "key": "map",
    "def": "[E:ma] is a map.\n",
    "id": "wuklqbdxyk"
  },
  {
    "name": "kagvil",
    "type": "R",
    "key": "empty-map",
    "def": "[E:kagvin] is the empty map.\n",
    "id": "4wxxlvhj9q"
  },
  {
    "name": "kagve",
    "type": "R",
    "key": "map-entry",
    "def": "[E:p] is the value in map [A:kagvin] for key [O:ma].\n",
    "id": "ynv5inth7z"
  },
  {
    "name": "kagvehe",
    "type": "R",
    "key": "context-map-entry",
    "def": "[E:p] is the value in the context map for key [A:ma].\n",
    "id": "wveaovosbk"
  },
  {
    "name": "kagvi",
    "type": "R",
    "key": "map-list-wrapper",
    "def": "[E:kagvin] represents a map that can be obtained from [O:kagvin] (default: context)\nby applying the list of transformations [A:blu ()].\n",
    "id": "onzg415avk"
  },
  {
    "name": "kagvien",
    "type": "R",
    "key": "map-list-remove",
    "def": "{kagvi} operation: remove entry with key [E:ma].\n",
    "id": "eogkr6aqeg"
  },
  {
    "name": "kagvie",
    "type": "R",
    "key": "map-list-insert",
    "def": "{kagvi} operation: insert entry with key [E:ma] and value [A:p].\n",
    "id": "obhtxxk03b"
  },
  {
    "name": "kagvini",
    "type": "R",
    "key": "map-list-update",
    "def": "{kagvi} operation: transform entry with key [E:ma] with value relation\n(old,new) [A:(p,p)].\n",
    "id": "oyk8ho9c8a"
  },
  {
    "name": "kagvihi",
    "type": "R",
    "key": "context-map-list-wrapper:",
    "def": "Transformations [E:blu ()] are applied on the context before it is used to evaluate [A:()].\n",
    "id": "uqfvqmic1a"
  },
  {
    "name": "pan",
    "type": "R",
    "key": "physical",
    "def": "[E:tce man] is a physical entity which occupies space-time volume [A:tce sken].\n",
    "id": "whi7bmezoy"
  },
  {
    "name": "gin",
    "type": "R",
    "key": "number-natural",
    "def": "[E:tce* man] is a natural number.",
    "id": "4uxuhdkbez"
  },
  {
    "name": "gien",
    "type": "R",
    "key": "number-interger",
    "def": "[E:tce* man] is an integer number.",
    "id": "fh4n33nk11"
  },
  {
    "name": "gine",
    "type": "R",
    "key": "succ",
    "def": "[E:tca ma] is the successor of [A:tca ma].",
    "id": "wxxmvr9zx2"
  },
  {
    "name": "ginen",
    "type": "R",
    "key": "zero",
    "def": "[E:tca gin] is zero.",
    "id": "w8gh1nggcn"
  },
  {
    "name": "gen",
    "type": "R",
    "key": "number-real",
    "def": "[E:tce* man] is a real number.",
    "notes": "Can be used at the end of a math unit chain to speak about an unspecified amount in that unit,\nwhile preventing to be multiplied by a unit-carrying number that would change the unit.\n",
    "id": "syw83vo8hb"
  },
  {
    "name": "gan",
    "type": "R",
    "key": "number",
    "def": "[E:tce* man] is a general purpose number.",
    "notes": "{gan} numbers are an extension field of {gen} (real numbers) that supports\nunits like length, mass, etc.\n",
    "id": "fwg6wbeotx"
  },
  {
    "name": "venu",
    "type": "R",
    "key": "satisfies-at-least-N-preds",
    "def": "List of arguments [E:ebluse] (default: empty list) satisfies at least [O:tce gin] (default: 1) predicate(s) in set [A:tcehi (...)].",
    "notes": "With default [O] it corresponds to an OR logical operator.\n\nPrefix with {etebleu} or {etableu} to easily transform this into a property/relation that can be used\nwith other words.\n\n__Example:__\\\n{me [pea bu mian, gour pei] veni etebleu venu [peho bu za ufeliksi, za ureksi]}\\\nAmong the cat and the dog, at least one of them is named either Felix or Rex.    \n",
    "id": "d9fzfk4r83"
  },
  {
    "name": "vanu",
    "type": "R",
    "key": "satisfies-exactly-N-preds",
    "def": "List of arguments [E:ebluse] (default: empty list) satisfies exactly [O:tce gin] (default: 1) predicate(s) in set [A:tcehi ()].",
    "notes": "See notes of {venu} for detailed exemple of usage.\n",
    "id": "f5t4czvnuc"
  },
  {
    "name": "vonu",
    "type": "R",
    "key": "satisfies-at-most-N-preds",
    "def": "List of arguments [E:ebluse] (default: empty list) satisfies at most [O:tce gin] (default: 1) predicate(s) in set [A:tcehi (...)].",
    "notes": "See notes of {venu} for detailed exemple of usage.\n",
    "id": "6blh1b2gk3"
  },
  {
    "name": "vunu",
    "type": "R",
    "key": "satisfies-all-except-N-preds",
    "def": "List of arguments [E:ebluse] (default: empty list) satisfies all except [O:tce gin] (default: 0) predicates in set [A:tcehi (...)].",
    "notes": "With default [O] it corresponds to an AND logical operator.\n\nSee notes of {venu} for detailed exemple of usage.\n",
    "id": "qsivboraps"
  },
  {
    "name": "veni",
    "type": "R",
    "key": "at-least-N-members-satisfies",
    "def": "At least [O:tce gin] (default: 1) members of set [E:tce p] satisfies property [A:(p)].",
    "notes": "With default [O] it corresponds to an OR logical operator.\n",
    "id": "6sy0lhny4i"
  },
  {
    "name": "vani",
    "type": "R",
    "key": "exactly-N-members-satisfies",
    "def": "Exactly [O:tce gin] (default: 1) members of set [E:tce p] satisfies property [A:(p)].",
    "id": "ko2nn8ztz4"
  },
  {
    "name": "voni",
    "type": "R",
    "key": "at-most-N-members-satisfies",
    "def": "At most [O:tce gin] (default: 1) members of set [E:tce p] satisfies property [A:(p)].",
    "id": "chewxhquck"
  },
  {
    "name": "vuni",
    "type": "R",
    "key": "all-except-N-members-satisfies",
    "def": "All except [O:tce gin] (default: 0) members of set [E:tce p] satisfies property [A:(p)].",
    "notes": "With default [O] it corresponds to an AND logical operator.\n",
    "id": "6bhqkyn3og"
  },
  {
    "name": "mine",
    "type": "R",
    "key": "<",
    "def": "[E:tce* gan] is less than [A:tce* gan].",
    "notes": "Operate on sets of numbers. True only if all members of [E] are less than all\nmembers of [A].\n",
    "id": "qt6yew5oof"
  },
  {
    "name": "mune",
    "type": "R",
    "key": ">",
    "def": "[E:tce* gan] is greater than [A:tce* gan].",
    "notes": "Operate on sets of numbers. True only if all members of [E] are less than all\nmembers of [A].\n",
    "id": "ennpp99pjl"
  },
  {
    "name": "fule",
    "type": "R",
    "key": "knows:",
    "def": "[E:tce* pan] knows [A:tce* man] from source [O:tce man].",
    "id": "86guwrqjob"
  },
  {
    "name": "ple",
    "type": "R",
    "key": "fact:",
    "def": "[E:tca man] is the fact that [A:()] is true.",
    "id": "soaifzyvro"
  },
  {
    "name": "dona",
    "type": "R",
    "key": "likes",
    "def": "[E:tce* pan] likes [A:tce* man].",
    "id": "iffa5o0qnw"
  },
  {
    "name": "jveo",
    "type": "R",
    "key": "friend",
    "def": "[E:tce* pan] is a friend of [A:tce* pan].",
    "id": "4lhxmspat4"
  },
  {
    "name": "kelo",
    "type": "R",
    "key": "thanks",
    "def": "[E:tce* pan] (default: speaker) thanks/is thankful to [A:tce* man]\n(defaults: listener) about [O:()] being true.\n",
    "id": "wsihly4n1c"
  },
  {
    "name": "kere",
    "type": "R",
    "key": "helps",
    "def": "[E:tce pan] helps [A:tce ma] to satisfy property [O:(tce ma)].\\\n[A] is the one satisfying [O], and [E] doesn't need to satisfy [O].\n",
    "id": "wb1zm07d82"
  },
  {
    "name": "vahul",
    "type": "R",
    "key": "milk",
    "def": "[E:tce* pan] is milk, either coming from lactating animals or plant-based alternatives.",
    "id": "svndl4hkmc"
  },
  {
    "name": "mian",
    "type": "R",
    "key": "cat",
    "def": "[E:tce* pan] is a cat/felid/member of family Felidae.",
    "id": "vgeqteao1c"
  },
  {
    "name": "zin",
    "type": "R",
    "key": "woman",
    "def": "[E:tce* pan] is a girl/woman/female (gender).",
    "id": "jct2wcsuqa"
  },
  {
    "name": "zun",
    "type": "R",
    "key": "man",
    "def": "[E:tce* pan] is a boy/man/male (gender).",
    "id": "fdju08ghm9"
  },
  {
    "name": "tsae",
    "type": "R",
    "key": "invents",
    "def": "[E:tce pan] invents [A:tce* ma].",
    "id": "4w27tty2ds"
  },
  {
    "name": "tsau",
    "type": "R",
    "key": "manufactured",
    "def": "[E:tce* pan] is made/created/manufactured/crafted by [A:tce pan].",
    "id": "l45mnfdjsq"
  },
  {
    "name": "zuna",
    "type": "R",
    "key": "inspired",
    "def": "[E:tce* pan] is inspired by [A:tce* ma]. [A] is a source of inspiration for [E].",
    "id": "yhzwpengy5"
  },
  {
    "name": "zvai",
    "type": "R",
    "key": "purpose:",
    "def": "[E:tce pan] has goal/purpose/aims to satisfy [A:(tce pan)].",
    "id": "pcbyhpj1jy"
  },
  {
    "name": "skal",
    "type": "R",
    "key": "computer",
    "def": "[E:tce* pan] is a computer (in general, includes smartphones, game consoles, etc).",
    "id": "fx1mnfjs7i"
  },
  {
    "name": "skol",
    "type": "R",
    "key": "software",
    "def": "[E:tce* pan] is a computer software/program.",
    "id": "0py164bdbd"
  },
  {
    "name": "sune",
    "type": "R",
    "key": "greets",
    "def": "[E:tce* pan] (default: speaker) says hello to/greets [A:tce* pan] (default: listener).",
    "id": "nj03wvtsbv"
  },
  {
    "name": "suna",
    "type": "R",
    "key": "welcomes",
    "def": "[E:tce* pan] (default: speaker) welcomes [A:tce* pan] (default: listener) to place [O:tce* pan].",
    "id": "blzblpa7fo"
  },
  {
    "name": "sunu",
    "type": "R",
    "key": "goodbye",
    "def": "[E:tce* pan] (default: speaker) says goodbye to [A:tce* pan] (default: listener).",
    "id": "knhmussoxm"
  },
  {
    "name": "spie",
    "type": "R",
    "key": "says",
    "def": "[E:tce pan] says [A:tce* man] to [O:tce* ma].",
    "id": "wlkwneqcyu"
  },
  {
    "name": "spua",
    "type": "R",
    "key": "home",
    "def": "[E:tce* pan] is a home/dwelling for [A:tce* pan].",
    "notes": "Can qualify the building {espuactal} or a larger space containing it\n(region/state/country/planet/etc).\n",
    "id": "qwnwymrscy"
  },
  {
    "name": "zaro",
    "type": "R",
    "key": "agrees",
    "def": "[E:tce* pan] agrees with [A:tce* pan] that [O:()] is true.",
    "id": "rzmceyzcgr"
  },
  {
    "name": "vania",
    "type": "R",
    "key": "moves",
    "def": "[E:tce* pan] moves/goes to [A:tce* pan] from [O:tce* pan].",
    "id": "meuqg48faw"
  },
  {
    "name": "gzi",
    "type": "R",
    "key": "agentive cause:",
    "def": "[E:tce* pan] is an agentive cause of [A:()] being true.",
    "id": "3qi3tvpegs"
  },
  {
    "name": "kine",
    "type": "R",
    "key": "learns",
    "def": "[E:tce* pan] (student) learns/studies [A:tce* man] from [O:tce pan] (teacher).",
    "notes": "TODO: It is not very clear yet what A is. They are not propositions since you can\nlearn false things, and there are probably other issues them being propositions.\n",
    "id": "macaegnams"
  },
  {
    "name": "seru",
    "type": "R",
    "key": "about",
    "def": "[E:tce* man] is about subject [A:tce* man].",
    "id": "0pi0sos7qt"
  },
  {
    "name": "snai",
    "type": "R",
    "key": "works:",
    "def": "[E:tce pan] labors/works by satisfying property [A:(tce pan)].",
    "id": "q0vx1idoej"
  },
  {
    "name": "ber",
    "type": "R",
    "key": "eberbanic",
    "def": "[E:tce* man] is Eberbanic/reflects Eberban culture.",
    "id": "vz1h8ccnmh"
  },
  {
    "name": "per",
    "type": "R",
    "key": "person",
    "def": "[E:tce* pan] is a person.",
    "id": "nzls6wh1l5"
  },
  {
    "name": "prae",
    "type": "R",
    "key": "loves",
    "def": "[E:tce* pan] loves [A:tce* man].",
    "id": "scjlbqkhj0"
  },
  {
    "name": "vire",
    "type": "R",
    "key": "visits",
    "def": "[E:tce* pan] visits [E:tce* pan].",
    "id": "wii5ktrkfq"
  },
  {
    "name": "peol",
    "type": "R",
    "key": "city",
    "def": "[E:tce* pan] is a town/city.",
    "id": "zw3nafu6xr"
  },
  {
    "name": "zdir",
    "type": "R",
    "key": "amusing",
    "def": "[E:tce man] is amusing/entertaining/fun according to [A:tce* pan] (default: {bzael})\nin property [O:(tce man)].\n",
    "id": "nqrmfwpnrs"
  },
  {
    "name": "gali",
    "type": "R",
    "key": "happy:",
    "def": "[E:tce* pan] is happy about [A:()] being true.",
    "id": "r7wbdwqgm0"
  },
  {
    "name": "gari",
    "type": "R",
    "key": "unhappy:",
    "def": "[E:tce* pan] is unhappy/sad about [A:()] being true.",
    "id": "t6q0c6agab"
  },
  {
    "name": "muli",
    "type": "R",
    "key": "easy:",
    "def": "[E:tce pan] finds it easy to satisfy [A:(tce pan)].",
    "id": "n4qltpakno"
  },
  {
    "name": "muri",
    "type": "R",
    "key": "difficult:",
    "def": "[E:tce pan] finds it difficult to satisfy [A:(tce pan)].",
    "id": "vtqvmmg5g7"
  },
  {
    "name": "ceno",
    "type": "R",
    "key": "understands:",
    "def": "[E:tce pan] understands why [A:p] satisfies [O:(p)].",
    "id": "qq61aq9jtw"
  },
  {
    "name": "siro",
    "type": "R",
    "key": "translation",
    "def": "[E:tce* ecoma] (source) has translation [A:tce* ecoma] (result).",
    "id": "xgbqoobjvr"
  },
  {
    "name": "tcuin",
    "type": "R",
    "key": "tree",
    "def": "[E:tce* pan] is a tree.",
    "id": "w85kmshrmv"
  },
  {
    "name": "jnaor",
    "type": "R",
    "key": "wild",
    "def": "[E:tce* pan] is wild/untamed.",
    "id": "7i380kaavf"
  },
  {
    "name": "kitmi",
    "type": "R",
    "key": "hopes:",
    "def": "[E:tce pan] hopes that [A:()] is the case; [E] would be happy to know that [A] is the case.",
    "id": "isleimajzc"
  },
  {
    "name": "ketmi",
    "type": "R",
    "key": "intentionless hopes:",
    "def": "[E:tce pan] hopes that [A:()] is the case; [E] would be happy to know that [A] is the case, but thinks that they are powerless to make it true by themself.",
    "id": "vfis6lzbve"
  },
  {
    "name": "katmi",
    "type": "R",
    "key": "wants:",
    "def": "[E:tce pan] desires/wishes/wants that [A:()] be the case; [E] would seize the opportunity to make [A] true.",
    "id": "iezve23kex"
  },
  {
    "name": "kotmi",
    "type": "R",
    "key": "intends:",
    "def": "[E:tce pan] intends/plans to make [A:()] true, having reasonable confidence in their ability to do so.",
    "id": "ch2b852dq7"
  },
  {
    "name": "kutmi",
    "type": "R",
    "key": "prays:",
    "def": "[E:tce pan] makes prayer [A:()], hoping that, somehow, this thought would influence reailty in the desired way, possibly throught the help of supernatural beings or forces.",
    "id": "0g7kesm6nq"
  },
  {
    "name": "fuher",
    "type": "R",
    "key": "fly",
    "def": "[E:tce* pan] flies (in air/space).",
    "id": "odaizkibaq"
  },
  {
    "name": "folin",
    "type": "R",
    "key": "airplane",
    "def": "[E:tce* pan] is an airplane.",
    "id": "ueqbcavbvq"
  },
  {
    "name": "jlei",
    "type": "R",
    "key": "motivated:",
    "def": "[E:tce* pan] is motivated to make [A:()] true by [O:tce* man] (motivation).",
    "notes": "TODO: Define what a motivation is. someone else? propositions?\n",
    "id": "l2gx6yauc8"
  },
  {
    "name": "zuan",
    "type": "R",
    "key": "walks",
    "def": "[E:tce* pan] walks.",
    "id": "bayilnplg2"
  },
  {
    "name": "vune",
    "type": "R",
    "key": "enjoyable",
    "def": "[E:tce* man] is enjoyable/great/nice for [A:tce* pan] (default: {bzael}).",
    "id": "x2x2xeye5x"
  },
  {
    "name": "jvin",
    "type": "R",
    "key": "dances",
    "def": "[E:tce* pan] dances.",
    "id": "ooyvglzn7l"
  },
  {
    "name": "blan",
    "type": "R",
    "key": "beautiful",
    "def": "[E:tce* man] is beautiful according to [A:tce man] (default: {bzael}).",
    "id": "7qni8huxuw"
  },
  {
    "name": "pcien",
    "type": "R",
    "key": "bread",
    "def": "[E:tce* pan] is bread.",
    "id": "0uujkotag5"
  },
  {
    "name": "ban",
    "type": "R",
    "key": "language",
    "def": "[E:tce* man] is a language.",
    "id": "pwmxutektw"
  },
  {
    "name": "zigmo",
    "type": "R",
    "key": "written",
    "def": "[E:tce* pan] is an inscription of text [A:tce* ecoma].",
    "id": "wlbcggayj6"
  },
  {
    "name": "tukfa",
    "type": "R",
    "key": "medium",
    "def": "[E:tce* pan] is displayed on medium [A:tce* pan].",
    "id": "a83mxj4jhm"
  },
  {
    "name": "tukfu",
    "type": "R",
    "key": "featured",
    "def": "[E:tce* pan] is some media featured in other media [A:tce* pan].",
    "notes": "Examples: the soundtrack of a movie/game, 2D or 3D assets in a game, etc.\n",
    "id": "1y70bzhhvg"
  },
  {
    "name": "soane",
    "type": "R",
    "key": "stolen",
    "def": "[E:tce* pan] is stolen from [A:tce* pan].",
    "notes": "Use with {gzi} to express who/what steals (E-Xd).\n",
    "id": "rmpkifsf0c"
  },
  {
    "name": "tari",
    "type": "R",
    "key": "attemps:",
    "def": "[E:tce* pan] tries/attemps to do/bring about [A:()].\nSuccess is neither implied or disimplied.\n",
    "id": "dzrpftevt6"
  },
  {
    "name": "tuli",
    "type": "R",
    "key": "needs:",
    "def": "[E:tce* man] requires/needs [A:()] to being true. [A] is a necessity for [E].",
    "id": "yla5j5nzda"
  },
  {
    "name": "miun",
    "type": "R",
    "key": "sleeps",
    "def": "[E:tce* pan] sleeps.",
    "id": "mu4oshpucp"
  },
  {
    "name": "juin",
    "type": "R",
    "key": "good",
    "def": "[E:tce* man] is good according to [A:tce pan] (default: {bzael}).",
    "id": "fkb8ogaewe"
  },
  {
    "name": "juon",
    "type": "R",
    "key": "bad",
    "def": "[E:tce* man] is bad according to [A:tce pan] (default: {bzael}).",
    "id": "ske4u4gwyx"
  },
  {
    "name": "kunu",
    "type": "R",
    "key": "feels",
    "def": "[E:tce* pan] feels sentiment/emotion/sensation [A:tce* man].",
    "notes": "TODO: Define sentiment/emotion/sensation.\n",
    "id": "6runpjljp0"
  },
  {
    "name": "viru",
    "type": "R",
    "key": "sees",
    "def": "[E:tce* pan] sees [A:tce* pan].",
    "id": "r9jofkaowc"
  },
  {
    "name": "pure",
    "type": "R",
    "key": "hears",
    "def": "[E:tce* pan] hears [A:tce* man].",
    "notes": "For listening see {etaripure}.",
    "id": "uj342f9oaw"
  },
  {
    "name": "vain",
    "type": "R",
    "key": "alive",
    "def": "[E:tce* pan] is alive.",
    "id": "ndedgziytg"
  },
  {
    "name": "vaun",
    "type": "R",
    "key": "dead",
    "def": "[E:tce* pan] is dead.",
    "id": "647zwucgf3"
  },
  {
    "name": "cfin",
    "type": "R",
    "key": "solid",
    "def": "[E:tce* pan] is a solid (state of matter).",
    "id": "r3ghqjwt6v"
  },
  {
    "name": "cfen",
    "type": "R",
    "key": "liquid",
    "def": "[E:tce* pan] is a liquid (state of matter).",
    "id": "6rko2uu7va"
  },
  {
    "name": "cfan",
    "type": "R",
    "key": "gas",
    "def": "[E:tce* pan] is a gas (state of matter).",
    "id": "mfalhp75eo"
  },
  {
    "name": "cfean",
    "type": "R",
    "key": "fuild",
    "def": "[E:tce* pan] is a fuild (state of matter, gas or liquid).",
    "id": "g8ff14fir3"
  },
  {
    "name": "jeon",
    "type": "R",
    "key": "water",
    "def": "[E:tce* pan] is water (in any state).",
    "notes": "To speak about liquid water, add {cfen}.\n",
    "id": "xzllyv1sx1"
  },
  {
    "name": "gour",
    "type": "R",
    "key": "dog",
    "def": "[E:tce* pan] is a dog.",
    "id": "ilftg4btmc"
  },
  {
    "name": "kanan",
    "type": "R",
    "key": "wolf",
    "def": "[E:tce* pan] is a wolf.",
    "id": "edmwc8ujnr"
  },
  {
    "name": "kroan",
    "type": "R",
    "key": "frog",
    "def": "[E:tce* pan] is a frog.",
    "id": "3ojsocuqre"
  },
  {
    "name": "spoul",
    "type": "R",
    "key": "testudine",
    "def": "[E:tce* pan] is a turtle/tortoise/testudine/member of order Testudines",
    "id": "v0bop7yzj1"
  },
  {
    "name": "toril",
    "type": "R",
    "key": "bird",
    "def": "[E:tce* pan] is a bird.",
    "id": "qsevjdaur5"
  },
  {
    "name": "cein",
    "type": "R",
    "key": "room",
    "def": "[E:tce* pan] is a room.",
    "id": "ju1aijntrb"
  },
  {
    "name": "caun",
    "type": "R",
    "key": "animal",
    "def": "[E:tce* pan] is an animal.",
    "id": "kar7h43drl"
  },
  {
    "name": "flur",
    "type": "R",
    "key": "plant",
    "def": "[E:tce* pan] is a plant.",
    "id": "hp3x2jerun"
  },
  {
    "name": "jveno",
    "type": "R",
    "key": "friendly",
    "def": "[E:tce* pan] is kind/behaves friendly towards [A:tce* man].",
    "id": "5z3fg2p8rj"
  },
  {
    "name": "slari",
    "type": "R",
    "key": "rule",
    "def": "[E:tce* man] is a rule/law prescribing/mandating/requiring [A:()].",
    "id": "dulprqx3y8"
  },
  {
    "name": "zire",
    "type": "R",
    "key": "respects",
    "def": "[E:tce* pan] respects [A:tce* man].",
    "id": "csb8qamcqg"
  },
  {
    "name": "zbui",
    "type": "R",
    "key": "copulates",
    "def": "[E:tce* pan] have sex/sexual intercourse/copulates/mates with [A:tce* pan].",
    "id": "fn8nachgm7"
  },
  {
    "name": "jiro",
    "type": "R",
    "key": "shares",
    "def": "[E:tce* pan] shares [A:tce* man] with [O:tce* pan].",
    "id": "qptdoaahae"
  },
  {
    "name": "sier",
    "type": "R",
    "key": "internet",
    "def": "[E:tca man] is the Internet.",
    "id": "wyulrjphcd"
  },
  {
    "name": "stini",
    "type": "R",
    "key": "rigid",
    "def": "[E:tce* pan] is rigid/not bendable.",
    "id": "lf05kqsaiu"
  },
  {
    "name": "merun",
    "type": "R",
    "key": "organism",
    "def": "[E:tce* pan] is an organism / form of life.",
    "id": "c84admq4vz"
  },
  {
    "name": "slane",
    "type": "R",
    "key": "tied",
    "def": "[E:tce* pan] is tied/pinned to [A:tce* pan].",
    "id": "torlvzglzh"
  },
  {
    "name": "glon",
    "type": "R",
    "key": "game",
    "def": "[E:tce* man] is a game/activity made for entertainement purposes.",
    "notes": "It may not be actually played right now, while using {eglonsa} implies that there is a player.",
    "id": "je2by0lctr"
  },
  {
    "name": "spenu",
    "type": "R",
    "key": "look",
    "def": "[E:tce* pan] looks at/watches [A:tce* pan].",
    "id": "mre2klwbx7"
  },
  {
    "name": "vihon",
    "type": "R",
    "key": "car",
    "def": "[E:tce* pan] is a car.",
    "id": "re4w2vqoju"
  },
  {
    "name": "zaria",
    "type": "R",
    "key": "recipe",
    "def": "[E:tce* man] is a recipe, algorithm, procedure to achieve result [A:tce* man].",
    "id": "y9cpaqtwg7"
  },
  {
    "name": "zenio",
    "type": "R",
    "key": "provided",
    "def": "[E:tce* pan] [supply/commodity] is provided to [A:tce* pan].",
    "notes": "Use with {gzi} to express who/what provides [E].\n",
    "id": "yuesrkiajk"
  },
  {
    "name": "curo",
    "type": "R",
    "key": "grammar",
    "def": "[E:tca man] is the grammar of [A:tca man].",
    "notes": "TODO: See {cei} notes.\n",
    "id": "6fkztdm4xl"
  },
  {
    "name": "tsiu",
    "type": "R",
    "key": "finds",
    "def": "[E:tce* pan] finds/discovers [A:tce* man].",
    "id": "oowoy3auep"
  },
  {
    "name": "tsui",
    "type": "R",
    "key": "searches",
    "def": "[E:tce* pan] searches/looks for something that satisfies [A:(p)].",
    "notes": "This doesn't imply that something satisfying [A] really exists.\n",
    "id": "jo5uxpp9f9"
  },
  {
    "name": "buan",
    "type": "R",
    "key": "text",
    "def": "[A:tce* man] is a text.",
    "id": "ernf6oh1zg"
  },
  {
    "name": "bino",
    "type": "R",
    "key": "sick",
    "def": "[E:tce* pan] is ill/sick from disease [A:tce* man].",
    "id": "83sklgorvt"
  },
  {
    "name": "saul",
    "type": "R",
    "key": "light",
    "def": "[E:tce* pan] is light (energy).",
    "id": "7hsf409fle"
  },
  {
    "name": "cmiri",
    "type": "R",
    "key": "emits",
    "def": "[E:tce* pan] emits/produce [A:tce* pan].",
    "id": "a0ngc6glp1"
  },
  {
    "name": "cmiru",
    "type": "R",
    "key": "receives",
    "def": "[E:tce* pan] receives/absorbs [A:tce* pan].",
    "id": "stnikxm23l"
  },
  {
    "name": "flun",
    "type": "R",
    "key": "sound",
    "def": "[A:tce* man] is a sound.",
    "id": "uu6cakexur"
  },
  {
    "name": "fana",
    "type": "R",
    "key": "social parent",
    "def": "[E:tce* pan] is a social parent of [A:tce* pan] (child). [E] raises [A].",
    "id": "ydafwz0dpc"
  },
  {
    "name": "vele",
    "type": "R",
    "key": "genetic parent",
    "def": "[E:tce* pan] is a genetic direct parent of [A:tce* pan].\n[E] directly contributes to the genetic makeup of [A].\n",
    "id": "qexvxnyxrj"
  },
  {
    "name": "tana",
    "type": "R",
    "key": "sibling",
    "def": "[E:tce* pan] is a sibling/brother/sister of [A:tce* pan].",
    "id": "xrpthmvqzq"
  },
  {
    "name": "kene",
    "type": "R",
    "key": "nibling",
    "def": "[E:tce* pan] is a nibling/nephew/nice of [A:tce* pan] (uncle/aunt).",
    "id": "dkmrgjgriv"
  },
  {
    "name": "mana",
    "type": "R",
    "key": "mother",
    "def": "[E:tce* pan] is a (social) mother of [A:tce* pan].",
    "notes": "Equivalent to {zin fana}.",
    "id": "la6bqysk7n"
  },
  {
    "name": "pana",
    "type": "R",
    "key": "father",
    "def": "[E:tce* pan] is a (social) father of [A:tce* pan].",
    "notes": "Equivalent to {zun fana}.",
    "id": "kfxorufmmw"
  },
  {
    "name": "jnehu",
    "type": "R",
    "key": "takes care",
    "def": "[E:tce* pan] takes cares of [A:tce* pan].\n[E] ensures that the needs of [A] are fulfulled.\n",
    "id": "dmqfp5rpq1"
  },
  {
    "name": "dzana",
    "type": "R",
    "key": "married",
    "def": "[E:tce* pan] is married to [A:tce* pan].",
    "id": "xm9tse7cct"
  },
  {
    "name": "kineo",
    "type": "R",
    "key": "contact",
    "def": "[E:tce* pan] makes physical contact with [A:tce* pan].",
    "notes": "[E] may not be agentive and can be an inanimate object. Use {gzi} to add\nagency.\n",
    "id": "96lvpzzkom"
  },
  {
    "name": "zgehal",
    "type": "R",
    "key": "strange",
    "def": "[E:tce* man] is strange/weird.",
    "notes": "TODO: According to who? Since it seems subjective, could it use a\nsubjective \"actor\" in the context?\n",
    "id": "jgewshmmt3"
  },
  {
    "name": "zvaor",
    "type": "R",
    "key": "accident",
    "def": "[E:()] is an accident/unintentional.",
    "id": "lsnj8jjkmu"
  },
  {
    "name": "ckuil",
    "type": "R",
    "key": "stellar body",
    "def": "[E:tce* pan] is a stellar body.",
    "notes": "Stars, planets, moons, asteroid etc are stellar bodies.",
    "id": "fcl0t79yc5"
  },
  {
    "name": "ckuel",
    "type": "R",
    "key": "star",
    "def": "[E:tce* pan] is a star.",
    "id": "h9j1gg2cwz"
  },
  {
    "name": "ckual",
    "type": "R",
    "key": "planet",
    "def": "[E:tce* pan] is a planet.",
    "id": "i24b50cv0l"
  },
  {
    "name": "ckuol",
    "type": "R",
    "key": "moon",
    "def": "[E:tce* pan] is a major natural satellite/moon.",
    "id": "yfcj6sjbss"
  },
  {
    "name": "kari",
    "type": "R",
    "key": "axiomatic-belief:",
    "def": "[E:tce* pan] has axiomatic belief that [A:()] is true.",
    "notes": "[A] is an axiom, is presupposed to be true and it's truth value is never\nput into doupt.\n",
    "id": "w0aqh2uwhk"
  },
  {
    "name": "kuri",
    "type": "R",
    "key": "thinks:",
    "def": "[E:tce* pan] thinks that [A:()] is true.",
    "id": "kxo9ztaycl"
  },
  {
    "name": "meon",
    "type": "R",
    "key": "apple",
    "def": "[E:tce* pan] is an apple.",
    "id": "ym0o9kvaix"
  },
  {
    "name": "kcaor",
    "type": "R",
    "key": "table",
    "def": "[E:tce* pan] is a table.",
    "id": "xsvrcy3wof"
  },
  {
    "name": "stan",
    "type": "R",
    "key": "country",
    "def": "[E:tce* pan] is a country/territory.",
    "id": "bc0e4pcz9h"
  },
  {
    "name": "drair",
    "type": "R",
    "key": "god",
    "def": "[E:tce* man] is a god.",
    "id": "uuwufiyz1v"
  },
  {
    "name": "marai",
    "type": "R",
    "key": "remembers:",
    "def": "[E:tce* pan] remembers the past experience of perceiving that [A:()] was the case.",
    "id": "wdughdrr2i"
  },
  {
    "name": "munai",
    "type": "R",
    "key": "intuits:",
    "def": "[E:tce* pan] intuits that [A:()] is the case.",
    "id": "wl8bgxuacj"
  },
  {
    "name": "munui",
    "type": "R",
    "key": "cultural knowledge:",
    "def": "[E:tce* pan] has cultural knowledge, collective wisdom according to which [A:()] is the case.",
    "id": "ettifc4jmj"
  },
  {
    "name": "valai",
    "type": "R",
    "key": "infers from senses:",
    "def": "[E:tce* pan] infers from their current sensorial experience that [A:()] is the case.",
    "id": "puq4yi3rrf"
  },
  {
    "name": "valoi",
    "type": "R",
    "key": "infers from multiple sources:",
    "def": "[E:tce* pan] infers (from several sources of information) that [A:()] is the case.",
    "id": "w14bplmcqv"
  },
  {
    "name": "munoi",
    "type": "R",
    "key": "hearsay:",
    "def": "[E:tce* pan] has got second-hand information or hearsay according to which [A:()] is the case.",
    "id": "xq83jvzd55"
  },
  {
    "name": "bale",
    "type": "R",
    "key": "standing",
    "def": "[E:tce* pan] is standing on [A:tce* pan].",
    "id": "ktg311prdc"
  },
  {
    "name": "ctua",
    "type": "R",
    "key": "sit",
    "def": "[E:tce* pan] is sitting on [A:tce* pan].",
    "id": "lzwen9akg1"
  },
  {
    "name": "proi",
    "type": "R",
    "key": "lying down",
    "def": "[E:tce* pan] is lying down on [A:tce* pan].",
    "id": "p6vxsz77g5"
  },
  {
    "name": "gavgin",
    "type": "R",
    "key": "crystal",
    "def": "[E:tce* pan] is a crystal/gem/mineral with orderly atomic structure [A:tca man].",
    "id": "clobthv9y6"
  },
  {
    "name": "jalan",
    "type": "R",
    "key": "awake",
    "def": "[E:tce* pan] is awake.",
    "id": "odewd63czr"
  },
  {
    "name": "celia",
    "type": "R",
    "key": "science",
    "def": "[E:tca man] is the science/study/body of knowledge about topic [A:tce* man].",
    "notes": "TODO: Define what a topic is.\n",
    "id": "fdsj3ynb15"
  },
  {
    "name": "filu",
    "type": "R",
    "key": "gives birth",
    "def": "[E:tce* pan] gives birth to/begets [A:tce* pan].",
    "id": "1deyt0qtei"
  },
  {
    "name": "sahar",
    "type": "R",
    "key": "blossom",
    "def": "[E:tce* pan] is a blossom/flower (reproductive structure of a flowering plant {esaharflur}).",
    "id": "5f1kx0ktx8"
  },
  {
    "name": "suhur",
    "type": "R",
    "key": "leaf",
    "def": "[E:tce* pan] is a leaf (of a plant).",
    "id": "uy3j4w7uxv"
  },
  {
    "name": "kena",
    "type": "R",
    "key": "holds",
    "def": "[E:tce* pan] holds/grasps [A:tce* pan].",
    "id": "q9fyy1qn9d"
  },
  {
    "name": "jarai",
    "type": "R",
    "key": "paid work:",
    "def": "[E:tce pan] has satisfying property [A:(tce pan)] as one of their jobs/occupations (paid work).",
    "id": "wwih32fwvc"
  },
  {
    "name": "zerai",
    "type": "R",
    "key": "personality trait:",
    "def": "[E:tce pan] has satisfying property [A:(tce pan)] as a personality trait.",
    "id": "od2vvlzdn2"
  },
  {
    "name": "dzai",
    "type": "R",
    "key": "skilled:",
    "def": "[E:tce pan] is skilled/an expert at satisfy property [A:(tce pan)].",
    "id": "ewii2lwhb7"
  },
  {
    "name": "dzui",
    "type": "R",
    "key": "able:",
    "def": "[E:tce pan] is able to satisfy property [A:(tce pan)].",
    "id": "zwvj8ibmcc"
  },
  {
    "name": "benal",
    "type": "R",
    "key": "healthy",
    "def": "[E:tce* pan] is healthy/fit/well/in good health.",
    "id": "cvvwmrotg2"
  },
  {
    "name": "jogmal",
    "type": "R",
    "key": "wound",
    "def": "[E:tce* pan] is a wound.",
    "id": "zc08tmqeum"
  },
  {
    "name": "meul",
    "type": "R",
    "key": "rain",
    "def": "[E:tce* pan] (default: water) is raining.",
    "id": "afkl3d764n"
  },
  {
    "name": "zniri",
    "type": "R",
    "key": "obligated:",
    "def": "[A:()] is obligated to be performed under authority [E:tce* pan]. [A] is a duty.\n",
    "notes": "Examples: praying (in some religions), voting (in some countries), parents\ntaking care of their children is societally obligated\n",
    "id": "bbmaoqi9r0"
  },
  {
    "name": "zneri",
    "type": "R",
    "key": "encouraged:",
    "def": "[A:()] is encouraged to be performed under authority [E:tce* pan].\\\n[A] is a virtuous/upstanding behavior.\n",
    "notes": "Examples: charity, volunteer work, being polite\n",
    "id": "katsvpqhmr"
  },
  {
    "name": "znari",
    "type": "R",
    "key": "tolerated:",
    "def": "[A:()] is neither encouraged nor discouraged (i.e. permitted) by authority [E:tce* pan].\n[A] is tolerated.\n",
    "notes": "Examples: basically most actions are {znari}, there are so many examples\n-- the act of breathing is {znari}\n",
    "id": "juramnwmey"
  },
  {
    "name": "znori",
    "type": "R",
    "key": "discouraged:",
    "def": "[A:()] is discouraged to be performed under authority [E:tce* pan]; [A] is reprehensible.\n",
    "notes": "Examples: lying (not under oath), crimes with are technically illegal but\nnot prosecuted, laughing at a funeral, breaking certain religious laws\n",
    "id": "2uij97w56c"
  },
  {
    "name": "znuri",
    "type": "R",
    "key": "forbidden:",
    "def": "[A:()] is forbidden to be done by authority [E:tce* pan].\n",
    "notes": "Examples: for many religions speaking badly of their deity is forbidden,\ncrimes which are prosecuted, cheating on your partner in a monogamous relationship\n",
    "id": "wtc0sbwiwj"
  },
  {
    "name": "molai",
    "type": "R",
    "key": "rewarded/punished:",
    "def": "[E:tce pan] is made to satisfy [A:(tce pan)] as a reward/punishment.\n[E] is awarded/punished, with result that they satisfy [A].\n",
    "id": "td2lg6faki"
  },
  {
    "name": "krehu",
    "type": "R",
    "key": "meat",
    "def": "[E:tce* pan] is meat from animal/source [A:tce* pan].",
    "id": "giuwxgdlvl"
  },
  {
    "name": "drie",
    "type": "R",
    "key": "buys",
    "def": "[E:tce pan] buys [A:tce pan] for price/in exchange for [O:tce pan] (where success is implied).",
    "id": "034abxcqau"
  },
  {
    "name": "dria",
    "type": "R",
    "key": "offers",
    "def": "[E:tce pan] offers/intends to sell [A:tce pan] for price/in exchange for [O:tce pan] (where success is not implied).",
    "id": "f6na2jopyj"
  },
  {
    "name": "pubdel",
    "type": "R",
    "key": "soil",
    "def": "[E:tce* pan] is soil/dirt/pebbles/silt/clay (soil of all types).",
    "id": "falmva70zj"
  },
  {
    "name": "baluor",
    "type": "R",
    "key": "stone",
    "def": "[E:tce* pan] is a stone/rock/boulder (unified unbroken mass).",
    "id": "wn6yzmye8r"
  },
  {
    "name": "boiur",
    "type": "R",
    "key": "dry land",
    "def": "[E:tce* pan] is dry land (not watery, can be stepped on).",
    "notes": "antonyms: {suier}, {gzeon}",
    "id": "ttvo8lgox4"
  },
  {
    "name": "suier",
    "type": "R",
    "key": "sea",
    "def": "[E:tce* pan] is a sea/ocean/lake (relatively large non-flowing body of water).",
    "id": "wl3qaptjzv"
  },
  {
    "name": "gzeon",
    "type": "R",
    "key": "river",
    "def": "[E:tce* pan] is a river/stream/brook (relatively large flowing body of water).",
    "id": "bvejlt10si"
  },
  {
    "name": "sanol",
    "type": "R",
    "key": "air",
    "def": "[E:tce* pan] is air/breathable atmosphere/gas at correct pressure for [A:tce* pan] (default: {flan}/humans).",
    "id": "84wqipbpce"
  },
  {
    "name": "soeon",
    "type": "R",
    "key": "sky",
    "def": "[E:tce* pan] is is the sky (high troposphere and above).",
    "id": "atojlgas61"
  },
  {
    "name": "cnue",
    "type": "R",
    "key": "portion",
    "def": "[E:tce* pan] is a piece/portion/part of [A:tce pan].",
    "id": "kx3walxiid"
  },
  {
    "name": "duna",
    "type": "R",
    "key": "gives",
    "def": "[E:tce pan] gives [A:tce* pan] to [O:tce pan].",
    "notes": "[E] no longer has legal or incidental ownership over [A].\nNow, [O] has legal or incidental ownership over [A].\nTo specify whether it's legal or incidental, use\n(TODO: Add words for legal/incidental ownership)\n\n[E] does not accept payment or expect reciprocation from [O].\n",
    "id": "pcq9zoejuv"
  },
  {
    "name": "flan",
    "type": "R",
    "key": "human",
    "def": "[E:tce* man] is a human being.",
    "id": "cjj2u7h6ir"
  },
  {
    "name": "fulie",
    "type": "R",
    "key": "sum",
    "def": "[E:tce gan] is the sum of numbers in list [A:blu tce gan].",
    "id": "r8ezp2roox"
  },
  {
    "name": "fuliu",
    "type": "R",
    "key": "product",
    "def": "[E:tce gan] is the product of numbers in list [A:blu tce gan].",
    "id": "pd94naqm1w"
  },
  {
    "name": "bire",
    "type": "R",
    "key": "year",
    "def": "[E:tce gan] is 1 year (Gregorian Calandar) times [A:tce gan] (default: 1).",
    "notes": "Since years don't all have the same duration (leap years and leap seconds),\nand we're not speaking about a specific year in the Gregorian calendar,\n[E] is a subset of all possible durations of a year.\n",
    "id": "peug1pbvxf"
  },
  {
    "name": "birei",
    "type": "R",
    "key": "year (event)",
    "def": "Now is the year [E:tce gien] (default: 0) of [A:()] (default: Gregorian Calendar).",
    "id": "8f292ygof9"
  },
  {
    "name": "gare",
    "type": "R",
    "key": "month",
    "def": "[E:tce gan] is 1 month (Gregorian Calandar) times [A:tce gan] (default: 1).",
    "notes": "Since months don't all have the same duration (leap years and leap seconds),\nand we're not speaking about a specific month in the Gregorian calendar,\n[E] is a subset of all possible durations of a month.\n",
    "id": "q5yr0ta93i"
  },
  {
    "name": "garei",
    "type": "R",
    "key": "month (event)",
    "def": "Now is the month [E:tce gien] (default: 0) of [A:()] (default: {birei}).",
    "id": "5iqzf2hgie"
  },
  {
    "name": "kora",
    "type": "R",
    "key": "week",
    "def": "[E:tce gan] is 1 week (from Xday midnight to next Xday midnight, Gregorian Calandar) times [A:tce gan] (default: 1).",
    "notes": "Since weeks don't all have the same duration (leap seconds),\nand we're not speaking about a specific week in the Gregorian calendar,\n[E] is a subset of all possible durations of a week.\n",
    "id": "ccfnhkiitg"
  },
  {
    "name": "korai",
    "type": "R",
    "key": "week (event)",
    "def": "Now is the week [A:tce gan] (default: 0) of [O:tce ski] (default: {birei}).",
    "id": "cqi4n1lpkt"
  },
  {
    "name": "dena",
    "type": "R",
    "key": "day (unit)",
    "def": "[E:tce gan] is 1 day times [A:tce gan] (default: 1).",
    "notes": "Since days don't all have the same duration (leap seconds),\nand we're not speaking about a specific day in the Gregorian calendar,\n[E] is a subset of all possible durations of a day.\n",
    "id": "cfjh1v5inn"
  },
  {
    "name": "denai",
    "type": "R",
    "key": "day (event)",
    "def": "Now is the day [E:tce gien] (default: 0) of [A:()] (default: {garei}).",
    "id": "hlxvt9w4ga"
  },
  {
    "name": "sura",
    "type": "R",
    "key": "hour (unit)",
    "def": "[E:tce gan] is 1 hour times [A:tce gan] (default: 1).",
    "notes": "Since hours don't all have the same duration (leap seconds),\nand we're not speaking about a specific hour in the Gregorian calendar,\n[E] is a subset of all possible durations of an hour.\n",
    "id": "7jdojjj4lv"
  },
  {
    "name": "surai",
    "type": "R",
    "key": "hour (event)",
    "def": "Now is the hour [E:tce gien] of [A:()] (default: {denai}).",
    "id": "csqvyaljot"
  },
  {
    "name": "jero",
    "type": "R",
    "key": "minute (unit)",
    "def": "[E:tce gan] is 1 minute times [A:tce gan] (default: 1).",
    "id": "hxbyme2tnh"
  },
  {
    "name": "jeroi",
    "type": "R",
    "key": "minute (event)",
    "def": "Now is the minute [E:tce gien] of [A:()] (default: {surai})",
    "id": "l5u3vuf9yc"
  },
  {
    "name": "vola",
    "type": "R",
    "key": "second (unit)",
    "def": "[E:tce gan] is 1 second times [A:tce gan] (default: 1).",
    "id": "mhrlcmuwvk"
  },
  {
    "name": "volai",
    "type": "R",
    "key": "second (event)",
    "def": "Now is the second [E:tce gien] of [A:()] (default: {jeroi})",
    "id": "lvhzpvgj4z"
  },
  {
    "name": "mula",
    "type": "R",
    "key": "meter",
    "def": "[E:tce gan] is 1 meter times [A:tce gan] (default: 1).",
    "id": "w93rd5hdrd"
  },
  {
    "name": "gulo",
    "type": "R",
    "key": "kilogram",
    "def": "[E:tce gan] is 1 kilogram times [A:tce gan] (default: 1).",
    "id": "vbit1n0jcf"
  },
  {
    "name": "pere",
    "type": "R",
    "key": "ampere",
    "def": "[E:tce gan] is 1 ampere times [A:tce gan] (default: 1).",
    "id": "vyzkrgasib"
  },
  {
    "name": "kele",
    "type": "R",
    "key": "kelvin",
    "def": "[E:tce gan] is 1 kelvin times [A:tce gan] (default: 1).",
    "id": "ata2lrtlvb"
  },
  {
    "name": "kelu",
    "type": "R",
    "key": "degree-celcius",
    "def": "[E:tce gan] is 1 degree Celcius times [A:tce gan] (default: 1).",
    "id": "p6q0cb2cld"
  },
  {
    "name": "saura",
    "type": "R",
    "key": "candela",
    "def": "[E:tce gan] is 1 candela times [A:tce gan] (default: 1).",
    "id": "qxk4kuezqg"
  },
  {
    "name": "june",
    "type": "R",
    "key": "inverse",
    "def": "[E:tce gan] is the inverse (1/x) of [A:tce gan] (default: 1).",
    "notes": "Thanks to the transitivity of all unit predicates and numbers, it is easy to\nspeak about quantities with negative power units.\n\n4 km/h = {to je to jie mual jume vola}\n\nWhen dealing with multiple negative powers, it is best to group them after\na single {jume}.\n\n6.674e-11 m3.kg-1.s-2\n= 6.674e-11 m3/(kg.s2)\n= {tia jo tia tio tu jei teo jie mual mual mual jume gulo vola vola}\n",
    "id": "ulx09krbl9"
  },
  {
    "name": "cpie",
    "type": "R",
    "key": "length",
    "def": "[E:tce gan] (length) is the length of segment [A:tce pan].",
    "id": "nneh2x85ud"
  },
  {
    "name": "cpia",
    "type": "R",
    "key": "area",
    "def": "[E:tce gan] (length^2) is the area of surface [A:tce pan].",
    "id": "1p6a8o9nk3"
  },
  {
    "name": "cpio",
    "type": "R",
    "key": "volume",
    "def": "[E:tce gan] (length^3) is the volume of [A:tce pan].",
    "id": "nd9g9s8u4q"
  },
  {
    "name": "cpuin",
    "type": "R",
    "key": "point",
    "def": "[E:tce pan] is a (0d) point.",
    "id": "afnwxto0ke"
  },
  {
    "name": "cpuen",
    "type": "R",
    "key": "line",
    "def": "[E:tce pan] is a (1d) line.",
    "id": "wo4n0r54ks"
  },
  {
    "name": "cpuan",
    "type": "R",
    "key": "plane",
    "def": "[E:tce pan] is a (2d) plane.",
    "id": "i9d94cz5n6"
  },
  {
    "name": "jogme",
    "type": "R",
    "key": "mass",
    "def": "[E:tce gan] (mass) is the mass of [A:tce pan].",
    "id": "gpn685u76q"
  },
  {
    "name": "ckia",
    "type": "R",
    "key": "speed",
    "def": "[E:tce gan] (length/time) is the instantaneous speed of [A:tce pan].",
    "id": "ldcalrk1ii"
  },
  {
    "name": "gzia",
    "type": "R",
    "key": "population",
    "def": "[E:tce gan] (unitless) is the population/number of inhabitants of [A:tce pan].",
    "id": "uz7xkm5k7x"
  },
  {
    "name": "cnie",
    "type": "R",
    "key": "age",
    "def": "[E:tce gan] (time) is the age of [A:tce pan].",
    "id": "b0ey5as5c6"
  },
  {
    "name": "minui",
    "type": "R",
    "key": "sound volume",
    "def": "[E:tce gan] is the sound volume produced by [A:()], perceived by [O:tce pan] (default: {bzael}).",
    "id": "69ycoe83s6"
  },
  {
    "name": "fsau",
    "type": "R",
    "key": "wear",
    "def": "[E:tce* pan] wears [A:tce* pan].",
    "id": "vrsqhhv0zp"
  },
  {
    "name": "gion",
    "type": "R",
    "key": "shirt",
    "def": "[E:tce* pan] is a shirt/top.",
    "id": "l5muhbsrar"
  },
  {
    "name": "miul",
    "type": "R",
    "key": "pants",
    "def": "[E:tce* pan] is a pants/shorts/skirt.",
    "id": "bfcph6juna"
  },
  {
    "name": "gial",
    "type": "R",
    "key": "undershirt",
    "def": "[E:tce* pan] is an undershirt/bra.",
    "id": "g4vk2d8xbd"
  },
  {
    "name": "bior",
    "type": "R",
    "key": "underwear",
    "def": "[E:tce* pan] is an underwear/underpants/panties.",
    "id": "j7pp7vnyha"
  },
  {
    "name": "toro",
    "type": "R",
    "key": "joint",
    "def": "[E:tce pan] is a joint between [A:tco pan], [A] are connected together by [E].",
    "id": "rdsie2ychy"
  },
  {
    "name": "ceor",
    "type": "R",
    "key": "organ",
    "def": "[E:tce* pan] is an organ.",
    "id": "o7ryd10lwu"
  },
  {
    "name": "treun",
    "type": "R",
    "key": "trunk",
    "def": "[E:tce pan] is a trunk (central part of the body).",
    "id": "g4mtuykzjn"
  },
  {
    "name": "zlier",
    "type": "R",
    "key": "arm",
    "def": "[E:tce* pan] is an arm.",
    "id": "oyemdfrbzy"
  },
  {
    "name": "zlior",
    "type": "R",
    "key": "leg",
    "def": "[E:tce* pan] is a leg.",
    "id": "r2j7n1mftn"
  },
  {
    "name": "kenen",
    "type": "R",
    "key": "hand",
    "def": "[E:tce* pan] is a hand.",
    "id": "s4ekzm38rl"
  },
  {
    "name": "kenon",
    "type": "R",
    "key": "foot",
    "def": "[E:tce* pan] is a foot.",
    "id": "ypph5jwrme"
  },
  {
    "name": "zinul",
    "type": "R",
    "key": "finger",
    "def": "[E:tce pan] is a finger",
    "id": "ue37g3p56o"
  },
  {
    "name": "kirun",
    "type": "R",
    "key": "head",
    "def": "[E:tce* pan] is a head.",
    "id": "ja9wfwwifa"
  },
  {
    "name": "glaen",
    "type": "R",
    "key": "genitals",
    "def": "[E:tce* pan] are genitals.",
    "id": "uwmxjgjvh7"
  },
  {
    "name": "glaon",
    "type": "R",
    "key": "buttocks",
    "def": "[E:tce* pan] is a rear/buttock.",
    "id": "ioxa2c03t6"
  },
  {
    "name": "buren",
    "type": "R",
    "key": "mouth",
    "def": "[E:tce* pan] is a mouth.",
    "id": "skexhz96gk"
  },
  {
    "name": "virun",
    "type": "R",
    "key": "eye",
    "def": "[E:tce* pan] is an eye.",
    "id": "ompuogjgt7"
  },
  {
    "name": "gnoil",
    "type": "R",
    "key": "breast",
    "def": "[E:tce* pan] is a breast.",
    "id": "mqmszfhjbp"
  },
  {
    "name": "serin",
    "type": "R",
    "key": "tongue",
    "def": "[E:tce* pan] is a tongue.",
    "id": "fpbl9tm4ul"
  },
  {
    "name": "fanin",
    "type": "R",
    "key": "nose",
    "def": "[E:tce* pan] is a nose.",
    "id": "qhoa1afbkl"
  },
  {
    "name": "puren",
    "type": "R",
    "key": "ear",
    "def": "[E:tce* pan] is an ear.",
    "id": "hyptrjozor"
  },
  {
    "name": "panal",
    "type": "R",
    "key": "skin",
    "def": "[E:tce* pan] is skin.",
    "id": "i1gedyvymh"
  },
  {
    "name": "cilun",
    "type": "R",
    "key": "bone",
    "def": "[E:tce* pan] is a bone.",
    "id": "q1gdgaz05x"
  },
  {
    "name": "zekta",
    "type": "R",
    "key": "pain",
    "def": "[E:tce pan] feels pain which seems located in [A:tce pan].",
    "id": "j0bdfwp4lb"
  },
  {
    "name": "dogmu",
    "type": "R",
    "key": "governs",
    "def": "[E:tce pan] governs people [A:tce* pan].",
    "id": "aiczmufvcq"
  },
  {
    "name": "gogdul",
    "type": "R",
    "key": "tentacle",
    "def": "[E:tce* pan] is a tentacle.",
    "id": "iwjm1mv0ij"
  },
  {
    "name": "tsir",
    "type": "R",
    "key": "bed",
    "def": "[E:tce* pan] is a bed.",
    "id": "zkravpgbit"
  },
  {
    "name": "gzian",
    "type": "R",
    "key": "showers",
    "def": "[E:tce* pan] showers in substance [A:tce pan] (default: water).",
    "id": "jhnc5nvbrz"
  },
  {
    "name": "snoil",
    "type": "R",
    "key": "monster",
    "def": "[E:tce* pan] is a monster.",
    "id": "bovvdgkucg"
  },
  {
    "name": "zmoni",
    "type": "R",
    "key": "picture:",
    "def": "[E:tce* pan] is a picture depicting [A:()].",
    "notes": "[A] occurs at the instant the picture was taken, as is constrainted in space\nas the volume captured by the field of view of the camera.\n",
    "id": "zbbqohy82q"
  },
  {
    "name": "zoli",
    "type": "R",
    "key": "with-tool:",
    "def": "[A:()] is realised using tool [E:tce* man].",
    "notes": "[E] is a subset of all tools involved in [A]. To speak about all the tools\ninvolved, see {etcuzoli}.\n",
    "id": "gbk8uduqqh"
  },
  {
    "name": "zolin",
    "type": "R",
    "key": "register-tool",
    "def": "Register tool [E:tce* man] in the context. Constraint for {zoli}.",
    "id": "enzha5idyj"
  },
  {
    "name": "jine",
    "type": "R",
    "key": "centered-range",
    "def": "[E:tce gan] are all numbers in the range [A:tce gan] \u00b1 [O:tce gan] (default: 1).\n",
    "id": "cmjmwddxde"
  },
  {
    "name": "jina",
    "type": "R",
    "key": "interval-range",
    "def": "[E:tce gan] are all numbers in the range from [A:tce gan] to [O:tce gan].\n",
    "id": "blyloql45h"
  },
  {
    "name": "jino",
    "type": "R",
    "key": "floor-ceil",
    "def": "[E:tce gan] are all numbers in the range from floor([A:tca gan]) (included) to ceil([A]) (excluded).\n",
    "notes": "If [A] is an integer then the ceil will be the next integer, for the range [E]\nto have a length of 1.\n",
    "id": "twcf0jan6n"
  },
  {
    "name": "pafken",
    "type": "R",
    "key": "potato",
    "def": "[E:tce pan] is a potato.",
    "id": "ymuvroa9iu"
  },
  {
    "name": "zino",
    "type": "R",
    "key": "color",
    "def": "[E:tce zino] is a color of [A:tce pan] perceived by [O:tce pan] (default: {bzael}).",
    "id": "cmeot2jbo9"
  },
  {
    "name": "zmir",
    "type": "R",
    "key": "white",
    "def": "[E:tce zino] is color white.",
    "id": "d0l3cp2pwk"
  },
  {
    "name": "zmire",
    "type": "R",
    "key": "lighter",
    "def": "[E:tce zino] is a lighter (less HSV-saturation) shade of [A:tce zino].",
    "notes": "TODO: By how much?\n",
    "id": "ad4rvdw2zl"
  },
  {
    "name": "zmur",
    "type": "R",
    "key": "darker",
    "def": "[E:tce zino] is color black.",
    "id": "tfeeujlwxv"
  },
  {
    "name": "zmure",
    "type": "R",
    "key": "darker",
    "def": "[E:tce zino] is a darker (less HSV-value) shade of [A:tce zino].",
    "notes": "TODO: By how much?\n",
    "id": "4e113ltt58"
  },
  {
    "name": "zmer",
    "type": "R",
    "key": "red-ish",
    "def": "[E:tce zino] is color red-ish.",
    "id": "qxdacbj9pt"
  },
  {
    "name": "zmar",
    "type": "R",
    "key": "green-ish",
    "def": "[E:tce zino] is color green-ish.",
    "id": "8tl5qke633"
  },
  {
    "name": "zmor",
    "type": "R",
    "key": "blue-ish",
    "def": "[E:tce zino] is color blue-ish.",
    "id": "aqb12hf0h5"
  },
  {
    "name": "zmeher",
    "type": "R",
    "key": "red",
    "def": "[E:tce zino] is color red.",
    "id": "dab5wa7knk"
  },
  {
    "name": "zmahar",
    "type": "R",
    "key": "lime green",
    "def": "[E:tce zino] is color lime green.",
    "id": "3za1drxike"
  },
  {
    "name": "zmohor",
    "type": "R",
    "key": "blue",
    "def": "[E:tce zino] is color blue.",
    "id": "m1bbuv2bkp"
  },
  {
    "name": "zmear",
    "type": "R",
    "key": "yellow",
    "def": "[E:tce zino] is color yellow.",
    "id": "4p1ty9pgoi"
  },
  {
    "name": "zmaor",
    "type": "R",
    "key": "cyan",
    "def": "[E:tce zino] is color cyan.",
    "id": "v0880nf0fg"
  },
  {
    "name": "zmeor",
    "type": "R",
    "key": "magenta",
    "def": "[E:tce zino] is color magenta.",
    "id": "v46cs9fs33"
  },
  {
    "name": "zmeaer",
    "type": "R",
    "key": "orange",
    "def": "[E:tce zino] is color orange.",
    "id": "vebh9m3k5f"
  },
  {
    "name": "zmaear",
    "type": "R",
    "key": "chartreuse (green)",
    "def": "[E:tce zino] is color chartreuse (green).",
    "id": "16k054sa4h"
  },
  {
    "name": "zmaoar",
    "type": "R",
    "key": "spring green",
    "def": "[E:tce zino] is color spring green.",
    "id": "dfw5luy241"
  },
  {
    "name": "zmoaor",
    "type": "R",
    "key": "azure",
    "def": "[E:tce zino] is color azure.",
    "id": "p2xvyctf5x"
  },
  {
    "name": "zmoeor",
    "type": "R",
    "key": "violet",
    "def": "[E:tce zino] is color violet.",
    "id": "95n4o1eyit"
  },
  {
    "name": "zmeoer",
    "type": "R",
    "key": "rose",
    "def": "[E:tce zino] is color rose.",
    "id": "zzferj56lq"
  },
  {
    "name": "cekmi",
    "type": "R",
    "key": "differs:",
    "def": "[E:tce p] differs in what they individually satisfy relation [A:(tca a, b)]\nwith.\n",
    "lambda": "on cekmi ke ga be\nke\n  ve tce ga\n  bi fi ki be ke tce ga ki\n",
    "notes": "[E] individually satisfy relation [A] with something (independant of each\nother), but don't all individually satisfy relation [A] with the same thing.\n",
    "id": "rn07g95kw6"
  },
  {
    "name": "tconi",
    "type": "R",
    "key": "mutual-1:",
    "def": "All pairs subset of [E:tco p] have property [A:(tco p)].",
    "id": "1ekbkw2s33"
  },
  {
    "name": "tcori",
    "type": "R",
    "key": "mutual-2:",
    "def": "All pairs subset of [E:tco p] have their members mutually satisfy relation [A:(tca a, tca p)].",
    "id": "ho1az3mcl2"
  },
  {
    "name": "jnu",
    "type": "R",
    "key": "big:",
    "def": "[E:tce* p] are big compared to all things satisfy property [O:(tca p)] (default: always true)\n([E] doesn't necessarily satisfy [O]) and measuring relation [A:(tce gan,tca p)] ([E] must satisfy\n[A]), with standard deviation [U:tca gan] (default: 1).\n",
    "notes": "Measuring relation [A] allows to choose how the things are measured, but can also be used to\nfilter what those things are. Since [E] is measured using [A], then it means [E] satisfy this\nfilter.\n\n{me jnu epnuencpie tcuin} = It's a tall tree. (measurement is \"height of a tree\", so things that are\nnot trees are excluded from the comparaison)\n\nIf you want to compare [E] with things satisfying a property that [E] don't satisfy, provide this\nproperty to [A] and don't filter in [O].\n\n{me bjaor jnu via epnuencpie fio kroan} = The elephant is tall compared to frogs.  \n\nIn intensity mode ({stu}), all values are rescaled such that the average is now 0 and [O] standard\ndeviations is now 1. This allows to use {ste}/{sto} instead of binding [U] with a number.\n",
    "id": "gi4jvusxpm"
  },
  {
    "name": "jni",
    "type": "R",
    "key": "small:",
    "def": "[E:tce* p] are small compared to all things satisfy property [O:(tca p)] (default: always true)\n([E] doesn't necessarily satisfy [O]) and measuring relation [A:(tce gan,tca p)] ([E] must satisfy\n[A]), with standard deviation [U:tca gan] (default: 1).\n",
    "notes": "Measuring relation [A] allows to choose how the things are measured, but can also be used to\nfilter what those things are. Since [E] is measured using [A], then it means [E] satisfy this\nfilter.\n\n{me jnu epnuencpie tcuin} = It's a small tree. (measurement is \"height of a tree\", so things that are\nnot trees are excluded from the comparaison)\n\nIf you want to compare [E] with things satisfying a property that [E] don't satisfy, provide this\nproperty to [A] and don't filter in [O].\n\n{me kroan jni via epnuencpie fio bjaor} = The frog is small compared to elephants.  \n\nIn intensity mode ({stu}), all values are rescaled such that the average is now 0 and [O] standard\ndeviations is now 1. This allows to use {ste}/{sto} instead of binding [U] with a number.\n",
    "id": "ik7qjuwuxm"
  },
  {
    "name": "jnuhi",
    "type": "R",
    "key": "increasingly:",
    "def": "[E:tce pan] is increasingly satisfying property [A:(tce gan,tce pan)] over time.\n",
    "notes": "Starts and stops when it is decreasing. It doesn't stop when it reach a plateau and\nthen increase again, which means at a plateau between increase and decrease it is increasing and decreasing\nat the same time.\n",
    "id": "yw2t4sv9sb"
  },
  {
    "name": "jnihi",
    "type": "R",
    "key": "decreasingly:",
    "def": "[E:tce pan] is decreasingly satisfying property [A:(tce gan,tce pan)] over time.\n",
    "notes": "Starts and stops when it is increasing. It doesn't stop when it reach a plateau and\nthen decrease again, which means at a plateau between increase and decrease it is increasing and decreasing\nat the same time.\n",
    "id": "dysqdtql0v"
  },
  {
    "name": "buran",
    "type": "R",
    "key": "bunny",
    "def": "[E:tce* pan] is a bunny/rabbit.",
    "id": "ndf5i6skum"
  },
  {
    "name": "bjaor",
    "type": "R",
    "key": "elephant",
    "def": "[E:tce* pan] is an elephant.",
    "id": "o8g2lhe4rd"
  },
  {
    "name": "graulin",
    "type": "R",
    "key": "dragon",
    "def": "[E:tce* pan] is a dragon.",
    "id": "7386lgkl9w"
  },
  {
    "name": "coro",
    "type": "R",
    "key": "in-possession-of",
    "def": "[E:tce* man] is in possession of [A:tce man].",
    "notes": "[A] may not be the legal owner of [A]. [A] may be using [E], or [E] may be designated to [A].\nExamples of usage are \"John's chair\", \"John's plate\", etc where John is eating somewhere but doesn't\nlegally own the objects.\n",
    "id": "299go33r7r"
  },
  {
    "name": "coriu",
    "type": "R",
    "key": "owned-by",
    "def": "[E:tce* man] is owned by [A:tce man].",
    "id": "zas8minuik"
  },
  {
    "name": "djia",
    "type": "R",
    "key": "set-overlaps",
    "def": "[E:tce p] and [A:tce p] overlap (they have a non-empty intersection).",
    "id": "56lqin725a"
  },
  {
    "name": "bzael",
    "type": "R",
    "key": "opiner",
    "def": "[E:tce man] is an opiner in the current context.",
    "notes": "Words expressing subjective optinions are stated from the point of view of\nan opiner. The opiner is stored in the context, and can be changed using\n{ebzaelmua}.\n\nWords like {kuri} (think) use {ebzaelmua} internally, while subjective words\nlike {blan} are by default according to the opiner {bzael}.\n",
    "id": "eczagf3v06"
  },
  {
    "name": "zoal",
    "type": "R",
    "key": "new",
    "def": "[E:tce* man] is new according to [A:tce man] (default: {bzael}).",
    "id": "ob1f25nx3q"
  },
  {
    "name": "ctuhi",
    "type": "R",
    "key": "silly",
    "def": "[E:tce* man] is silly according to [A:tce* pan] (default: {bzael}).",
    "id": "nqzh6pl3w0"
  },
  {
    "name": "djio",
    "type": "R",
    "key": "cardinality",
    "def": "[E:tca gin] is the cardinality/size of [A:ma].",
    "notes": "Provides the length of various structures, such as sets and lists.\n",
    "id": "s1oc7xvo0q"
  },
  {
    "name": "fania",
    "type": "R",
    "key": "smells",
    "def": "[E:tce* pan] smells (perceives smell of) [A:tce* pan].",
    "id": "fyc3rf8rf7"
  },
  {
    "name": "serie",
    "type": "R",
    "key": "smells",
    "def": "[E:tce* pan] feels the taste of [A:tce* pan].",
    "id": "hflpzqe80s"
  },
  {
    "name": "zailu",
    "type": "R",
    "key": "rotates",
    "def": "[E:tce* pan] rotates, spins, turns around axis [A:tce* pan].",
    "id": "ma7fvqdibi"
  },
  {
    "name": "soli",
    "type": "R",
    "key": "metaphor:",
    "def": "[E:p] metaphoricaly satisfy property [A:(p)].",
    "id": "agk3nnes4a"
  },
  {
    "name": "mliel",
    "type": "R",
    "key": "cold",
    "def": "[E:tce* pan] (default: the air) feels cold to the touch.",
    "id": "xuvbg8gnll"
  },
  {
    "name": "mlial",
    "type": "R",
    "key": "warm",
    "def": "[E:tce* pan] (default: the air) feels warm to the touch.",
    "id": "pne1nwyhy8"
  },
  {
    "name": "cpere",
    "type": "R",
    "key": "temperature",
    "def": "[E:tce gan] is the mean temperature of the volume [A:tce* pan].",
    "id": "gant5ud5xq"
  },
  {
    "name": "ciel",
    "type": "R",
    "key": "day",
    "def": "It is day (between locale-sunrise and locale-sunset inclusive).",
    "id": "w1aaav8mis"
  },
  {
    "name": "ciul",
    "type": "R",
    "key": "night",
    "def": "It is night (between locale-sunset and locale-sunrise exclusive).",
    "id": "kgzr2vsl1z"
  },
  {
    "name": "vzoin",
    "type": "R",
    "key": "morning",
    "def": "It is morning (between locale-sunrise and 11:59 inclusive).",
    "id": "gsnd7f1qxn"
  },
  {
    "name": "vzoen",
    "type": "R",
    "key": "noon",
    "def": "It is noon (precisely 12:00).",
    "id": "dxo7au7y1u"
  },
  {
    "name": "vzoan",
    "type": "R",
    "key": "afternoon",
    "def": "It is after noon (between 12:00 and locale-sunset inclusive).",
    "id": "csm12utyo8"
  },
  {
    "name": "vzoun",
    "type": "R",
    "key": "evening",
    "def": "It is evening (between sunset and typical locale-time of sleep).",
    "id": "jl7ojeesj9"
  },
  {
    "name": "zidmi",
    "type": "R",
    "key": "because:",
    "def": "[E:()] is true because of [A:()].",
    "id": "jqzbvtnncw"
  },
  {
    "name": "fekti",
    "type": "R",
    "key": "similar-to:",
    "def": "[E:tce ma] looks similar to things satifying [A:(tce ma)]. [E] is [A]-like.",
    "id": "n6l471ty0l"
  },
  {
    "name": "spel",
    "type": "R",
    "key": "pointed to",
    "def": "[E:tce* pan] is pointed to/singled out ostensibly by [A:tce* pan] (default: speaker).",
    "id": "vmenrgkg75"
  },
  {
    "name": "sfia",
    "type": "R",
    "key": "currency",
    "def": "[E:tce gan] is 1 unit of currency represented by ISO-4217 code [A:tca ecoma] times [O:tce gan] (default: 1).",
    "id": "sgr7bp1msz"
  },
  {
    "name": "sari",
    "type": "R",
    "key": "between:",
    "def": "[A:()] occurs between the current context event and event [E:tca ski].",
    "notes": "Both events must not overlap. Event described by [A] is met by one event and meets the other.\n(To speak about an event that occurs between them but don't meet them, use {sari seno}).\n",
    "id": "mva5065f60"
  },
  {
    "name": "sre",
    "type": "R",
    "key": "before:",
    "def": "[A:()] occurs before [E:tca ski] (default: current context event), separated by [O:tce gan] time.",
    "notes": "The end of [A] is before the start of [E]. [A] is in the past of [E].\n",
    "id": "5rdw01axi4"
  },
  {
    "name": "sru",
    "type": "R",
    "key": "after:",
    "def": "[A:()] occurs after [E:tca ski] (default: current context event), separated by [O:tce gan] time.",
    "notes": "The start of [A] is after the end of [E]. [A] is in the future of [E].\n",
    "id": "m3p1pma6zf"
  },
  {
    "name": "sra",
    "type": "R",
    "key": "starts:",
    "def": "[A:()] starts [E:tca ski] (default: current context event).",
    "notes": "The start of [A] is the start of [E].\n",
    "id": "4wmrgvvaw2"
  },
  {
    "name": "sro",
    "type": "R",
    "key": "finishes:",
    "def": "[A:()] finishes [E:tca ski] (default: current context event).",
    "notes": "The end of [E] is the end of [A].\n",
    "id": "nsnjvcaglb"
  },
  {
    "name": "srui",
    "type": "R",
    "key": "contains:",
    "def": "[A:()] contains [E:tca ski] (default: current context event).",
    "id": "64scvsnfn7"
  },
  {
    "name": "srei",
    "type": "R",
    "key": "contained-by:",
    "def": "[A:()] is contained by [E:tca ski] (default: current context event).",
    "id": "0fj04kshgt"
  },
  {
    "name": "srai",
    "type": "R",
    "key": "intersects-with:",
    "def": "[A:()] intersects with [E:tca ski] (default: current context event)",
    "id": "cwg79aqwl8"
  },
  {
    "name": "sri",
    "type": "R",
    "key": "unconstrained:",
    "def": "[A:()] occurs at some point unrelated with [E:tca ski] (default: current context event).",
    "notes": "[A] must still be reachable from [E], it cannot occur in an unrelated timeline.\n",
    "id": "u3q3u80bs7"
  },
  {
    "name": "skeri",
    "type": "R",
    "key": "tenses-AND:",
    "def": "[A:()] describes an event that satisfy all tense relations in set [E:tce (_, ())].",
    "notes": "This predicate ensure that the same event satisfy all tense relations. It allows to combine multiple tense relations\nthat are hard to combine otherwise.\n\nThe E slot of the tense relations will not be bound, and thus default bounds can take effect.\n\nExemple:\n{a peho bu birei sru pei skeri mi vania <e unihon stan>}\nThis year I'll go to Japan.\n",
    "id": "a3y1d3y93p"
  },
  {
    "name": "sni",
    "type": "R",
    "key": "possible:",
    "def": "It is possible that [A:()] occurs.",
    "id": "wx9gxr4xrp"
  },
  {
    "name": "snu",
    "type": "R",
    "key": "necessary:",
    "def": "It is necessary that [A:()] occurs.",
    "id": "16f4flzhb2"
  },
  {
    "name": "sna",
    "type": "R",
    "key": "counterfactual:",
    "def": "[A:()] would be true if [E:()] was true.",
    "notes": "- both [E] and [A] are false in the current timeline\\\n- at any instant I in the past of the current timeline, if [E] occurs in the future of I, then\n  [A] necessarily occurs too.\\\n- as [A] is evaluated in the current timeline with some common timespan T , it is evaluated in\n  the other timelines with a timespan T2 such that T and T2 have the same duration, and their\n  distance with I is the same.\n",
    "id": "m14pml81zw"
  },
  {
    "name": "sunai",
    "type": "R",
    "key": "parallel-universe:",
    "def": "[A:()] occurs in a parallel or fictional universe.",
    "notes": "Instant of this parallel or fictional universe are not accessible from any instant of the current universe.\n",
    "id": "1qs74axcu1"
  },
  {
    "name": "ski",
    "type": "R",
    "key": "event:",
    "def": "[E:tce man] is an event/occurence of [A:()].",
    "id": "yktbdu521a"
  },
  {
    "name": "skin",
    "type": "R",
    "key": "event-occurs",
    "def": "[E:tce ski] is occuring.",
    "id": "nt7nm8e1y5"
  },
  {
    "name": "skul",
    "type": "R",
    "key": "current-event",
    "def": "[E:tca ski] is the current context event.",
    "id": "nioynp1oyr"
  },
  {
    "name": "skinu",
    "type": "R",
    "key": "event-start",
    "def": "[E:tce gan] is the start time of event [A:tca ski].",
    "notes": "[E] is the time (in seconds) relative to a fixed reference point (which is not important, so we choose UNIX epoch).\nMostly useful with {jini}/{jiri} to order events.\n",
    "id": "pmwsbwwa6w"
  },
  {
    "name": "skiru",
    "type": "R",
    "key": "event-end",
    "def": "[E:tce gan] is the end time of event [A:tca ski].",
    "notes": "[E] is the time (in seconds) relative to a fixed reference point (which is not important, so we choose UNIX epoch).\nMostly useful with {jini}/{jiri} to order events.\n",
    "id": "ah0c4muyyx"
  },
  {
    "name": "skuli",
    "type": "R",
    "key": "event-concurrent:",
    "def": "[A:()] occurs in the same timespan as event [E:tca ski].",
    "id": "mqfz0l96zc"
  },
  {
    "name": "sken",
    "type": "R",
    "key": "space-time-volume",
    "def": "[E:tce* man] is a space-time volume.\n",
    "id": "palszydy29"
  },
  {
    "name": "skan",
    "type": "R",
    "key": "time-span",
    "def": "[E:tce* man] is a timespan.\n",
    "id": "17akg2234q"
  },
  {
    "name": "sufkun",
    "type": "R",
    "key": "present",
    "def": "[E:tca ski] is the present.",
    "notes": "The present is automatically updated between sentences to \"move forward\".\n",
    "id": "u6sn4vyfzh"
  },
  {
    "name": "skun",
    "type": "R",
    "key": "time-anchor",
    "def": "[E:tca ski] is the current sentence time anchor.",
    "notes": "Time anchor can be changed using {<en an skun sai>}.",
    "id": "xq7ino6s9j"
  },
  {
    "name": "skon",
    "type": "R",
    "key": "pick-time-span",
    "def": "[E:tca skan] is a timespan contained in the current common timespan.\n",
    "id": "i2jo0s1e03"
  },
  {
    "name": "zear",
    "type": "R",
    "key": "book",
    "def": "[E:tce* pan] is a book.\n",
    "id": "llu33swjlk"
  },
  {
    "name": "fleon",
    "type": "R",
    "key": "music",
    "def": "[E:tce* pan] is a music.\n",
    "id": "rxknm8lb4u"
  },
  {
    "name": "jnaha",
    "type": "R",
    "key": "laugh",
    "def": "[E:tce* pan] laugh because [A:()] is true.",
    "id": "svkaim6riw"
  },
  {
    "name": "pseo",
    "type": "R",
    "key": "distance",
    "def": "[E:tce gan] is the distance between [A:tce pan] and [O:tce pan] (default: referential {peni}).",
    "id": "4s9x0v0nby"
  },
  {
    "name": "psulo",
    "type": "R",
    "key": "center",
    "def": "[E:tca pan] is the center (average position) of [A:tce pan].",
    "id": "7vn4ceujmp"
  },
  {
    "name": "cko",
    "type": "R",
    "key": "event-anchor-relation:",
    "def": "[A:()] occurs such that every physical entity involved in [A] satisfy relation [O:(tce pan,tce,pan)]\nwith [E:tce pan] (anchor).\n",
    "notes": "Can be used to use any spacial relation to restrict the location of an event.\n\n{me espuactal cko vio pane fia mo etiansa meon}\\\nor shorter\\\n{me espuactal cko !vioia pane fia mo etiansa meon}\\\n",
    "id": "yp4zlj70hh"
  },
  {
    "name": "pane",
    "type": "R",
    "key": "inside",
    "def": "[E:tce pan] is inside of [A:tce pan].",
    "notes": "Used to speak about individual physical objects.\n\nTo speak about an event occuring in some location, use {cko vio pane fia ...}.\n",
    "id": "6jp262xhb4"
  },
  {
    "name": "pale",
    "type": "R",
    "key": "outside",
    "def": "[E:tce pan] is outside of [A:tce pan].",
    "notes": "Used to speak about individual physical objects.\n\nTo speak about an event occuring outside some location, use {cko vio pale fia ...}.\n",
    "id": "t27dz8wbr9"
  },
  {
    "name": "peni",
    "type": "R",
    "key": "cartesian-referential:",
    "def": "[A:()] is in the Cartesian coordinates referential of [E:tca pan].",
    "notes": "[E] must be a physical entity with a well identified front and up direction.\nThe average point of all points of the volume of [E] is used as the origin.\nBy default in a text the referential is the speaker.\n",
    "id": "t175fzkni1"
  },
  {
    "name": "penu",
    "type": "R",
    "key": "behind",
    "def": "[E:tce pan] is behind [A:tce pan].",
    "notes": "In the referential defined by {peni}, we take the vectors from all points of\n[E] to all points of [A]. For all those vectors, amongst the absolute values\nof all its components, the behind/in-front component must be the greatest,\nand the relative value must be in the behind direction.\n",
    "id": "2sthq7nyfa"
  },
  {
    "name": "pena",
    "type": "R",
    "key": "in-front-of",
    "def": "[E:tce pan] is in front of [A:tce pan].",
    "notes": "In the referential defined by {peni}, we take the vectors from all points of\n[E] to all points of [A]. For all those vectors, amongst the absolute values\nof all its components, the behind/in-front component must be the greatest,\nand the relative value must be in the in-front direction.\n",
    "id": "hpcj7idr7s"
  },
  {
    "name": "peno",
    "type": "R",
    "key": "to-the-left-of",
    "def": "[E:tce pan] is to the left of [A:tce pan].",
    "notes": "In the referential defined by {peni}, we take the vectors from all points of\n[E] to all points of [A]. For all those vectors, amongst the absolute values\nof all its components, the left/right component must be the greatest,\nand the relative value must be in the left direction.\n",
    "id": "nmk5qmo7fv"
  },
  {
    "name": "pene",
    "type": "R",
    "key": "to-the-right-of",
    "def": "[E:tce pan] is to the right of [A:tce pan].",
    "notes": "In the referential defined by {peni}, we take the vectors from all points of\n[E] to all points of [A]. For all those vectors, amongst the absolute values\nof all its components, the left/right component must be the greatest,\nand the relative value must be in the right direction.\n",
    "id": "58b63lo9cb"
  },
  {
    "name": "peniu",
    "type": "R",
    "key": "above",
    "def": "[E:tce pan] is above [A:tce pan].",
    "notes": "In the referential defined by {peni}, we take the vectors from all points of\n[E] to all points of [A]. For all those vectors, amongst the absolute values\nof all its components, the above/below component must be the greatest,\nand the relative value must be in the above direction.\n",
    "id": "5nrtbh0sv6"
  },
  {
    "name": "penie",
    "type": "R",
    "key": "below",
    "def": "[E:tce pan] is below [A:tce pan].",
    "notes": "In the referential defined by {peni}, we take the vectors from all points of\n[E] to all points of [A]. For all those vectors, amongst the absolute values\nof all its components, the above/below component must be the greatest,\nand the relative value must be in the below direction.\n",
    "id": "gnevlw6p4m"
  },
  {
    "name": "pnuen",
    "type": "R",
    "key": "vertical",
    "def": "[E:tce pan] is oriented vertically.",
    "notes": "In the referential defined by {peni}.\nTODO: Specify margin of error.\n",
    "id": "uqly4vvvgx"
  },
  {
    "name": "pneon",
    "type": "R",
    "key": "left-right",
    "def": "[E:tce pan] is oriented in the left-right direction.",
    "notes": "In the referential defined by {peni}.\nTODO: Specify margin of error.\n",
    "id": "b0ic7nzxd8"
  },
  {
    "name": "pnaun",
    "type": "R",
    "key": "front-back",
    "def": "[E:tce pan] is oriented in the front-back direction.",
    "notes": "In the referential defined by {peni}.\nTODO: Specify margin of error.\n",
    "id": "526611yo25"
  },
  {
    "name": "pini",
    "type": "R",
    "key": "geodetic-referential:",
    "def": "[A:()] is in the Geodetic coordinates referential of [E:tca pan].",
    "notes": "[E] must be a physical entity with a well identified north and south pole.\nThe average point of all points of the volume of [E] is used as the origin.\nBy default in a text the referential is closest celestial body from the speaker.\n",
    "id": "nh5bijnt09"
  },
  {
    "name": "pina",
    "type": "R",
    "key": "to-the-north-of",
    "def": "[E:tce pan] is to the north of [A:tce pan].",
    "notes": "In the referential defined by {pini}, we take the vectors from all points of\n[E] to all points of [A]. For all those vectors, amongst the absolute values\nof all its components, the latitude component must be the greatest,\nand the relative value must be in the north direction.\n",
    "id": "q3ha2dc3ld"
  },
  {
    "name": "pinu",
    "type": "R",
    "key": "to-the-south-of",
    "def": "[E:tce pan] is to the south of [A:tce pan].",
    "notes": "In the referential defined by {pini}, we take the vectors from all points of\n[E] to all points of [A]. For all those vectors, amongst the absolute values\nof all its components, the latitude component must be the greatest,\nand the relative value must be in the south direction.\n",
    "id": "oddrpzstav"
  },
  {
    "name": "pino",
    "type": "R",
    "key": "to-the-west-of",
    "def": "[E:tce pan] is to the west of [A:tce pan].",
    "notes": "In the referential defined by {pini}, we take the vectors from all points of\n[E] to all points of [A]. For all those vectors, amongst the absolute values\nof all its components, the longitude component must be the greatest,\nand the relative value must be in the west direction.\n",
    "id": "iduj207sqi"
  },
  {
    "name": "pine",
    "type": "R",
    "key": "to-the-east-of",
    "def": "[E:tce pan] is to the east of [A:tce pan].",
    "notes": "In the referential defined by {pini}, we take the vectors from all points of\n[E] to all points of [A]. For all those vectors, amongst the absolute values\nof all its components, the longitude component must be the greatest,\nand the relative value must be in the east direction.\n",
    "id": "awjcblokyu"
  },
  {
    "name": "piniu",
    "type": "R",
    "key": "altitude-above",
    "def": "[E:tce pan] is above (in altitude) of [A:tce pan].",
    "notes": "In the referential defined by {pini}, we take the vectors from all points of\n[E] to all points of [A]. For all those vectors, amongst the absolute values\nof all its components, the altitude component must be the greatest,\nand the relative value must be in the above direction.\n",
    "id": "9oo7ok5t64"
  },
  {
    "name": "pinie",
    "type": "R",
    "key": "altitude-below",
    "def": "[E:tce pan] is below (in altitude) of [A:tce pan].",
    "notes": "In the referential defined by {pini}, we take the vectors from all points of\n[E] to all points of [A]. For all those vectors, amongst the absolute values\nof all its components, the altitude component must be the greatest,\nand the relative value must be in the below direction.\n",
    "id": "d7dd6iak18"
  },
  {
    "name": "kcuni",
    "type": "R",
    "key": "station",
    "def": "[E:tce* pan] is a station for vehicules satisfying property [A:(tce* pan)].",
    "notes": "[A] is a property so that the present presence of a vehicle is not needed.",
    "id": "5acshqks6b"
  },
  {
    "name": "tcuan",
    "type": "R",
    "key": "train",
    "def": "[E:tce* pan] is a train.",
    "id": "w0u2nzirqc"
  },
  {
    "name": "cehil",
    "type": "R",
    "key": "boat",
    "def": "[E:tce* pan] is a boat.",
    "id": "by9qbcmbfq"
  },
  {
    "name": "drion",
    "type": "R",
    "key": "bicycle",
    "def": "[E:tce* pan] is a bicycle.",
    "id": "f6ri7fuw7z"
  },
  {
    "name": "sonul",
    "type": "R",
    "key": "measuring-device",
    "def": "[E:tce* pan] is a measuring device.",
    "id": "299pus3rzs"
  },
  {
    "name": "vogbi",
    "type": "R",
    "key": "leader",
    "def": "[E:tce* pan] is the leader of [A:tce pan].",
    "id": "dzp38nhcw3"
  },
  {
    "name": "cnuhe",
    "type": "R",
    "key": "generous",
    "def": "[E:tce pan] is generous towards [A:tce man].",
    "id": "p0g66q8zas"
  },
  {
    "name": "zihir",
    "type": "R",
    "key": "rich",
    "def": "[E:tce pan] is rich.",
    "id": "9ybt1fnuik"
  },
  {
    "name": "zihur",
    "type": "R",
    "key": "poor",
    "def": "[E:tce pan] is poor.",
    "id": "f48eqzzqqc"
  },
  {
    "name": "taktin",
    "type": "R",
    "key": "dangerous",
    "def": "[E:tce pan] is dangerous for [A:tce pan] (default: {bzael}).",
    "notes": "[E] pose a danger for [A], and [A] is not necessarily who thinks it is dangerous for [A].\nUse {kuri} to state who thinks its dangerous.\n",
    "id": "8hson1dier"
  },
  {
    "name": "ksuar",
    "type": "R",
    "key": "interesting",
    "def": "[E:tce pan] is interesting according to [A:tce pan] (default: {bzael}).",
    "id": "n0r4kfjv55"
  },
  {
    "name": "miore",
    "type": "R",
    "key": "shape",
    "def": "[E:tce man] is a shape of [A:tce pan].",
    "id": "grako8zxy2"
  },
  {
    "name": "celio",
    "type": "R",
    "key": "secret",
    "def": "[E:tce* man] is a secret among [A:tce pan].",
    "id": "unqmr4pgg0"
  },
  {
    "name": "tian",
    "type": "R",
    "key": "food",
    "def": "[E:tce* man] is edible by/food for [A:tce* pan] (default: species of {bzael}).",
    "id": "apew64vr0p"
  },
  {
    "name": "gnuri",
    "type": "R",
    "key": "flavored",
    "def": "[E:tce man] is made to have flavor of things satisfying [A:(tce man)].",
    "id": "uhiinytsff"
  },
  {
    "name": "kalan",
    "type": "R",
    "key": "drink",
    "def": "[E:tce* man] is potable/drinkable/a drink for [A:tce* pan] (default: species of {bzael}).",
    "id": "v4j1hdrofu"
  },
  {
    "name": "daliu",
    "type": "R",
    "key": "dedicated",
    "def": "[E:tce* man] is dedicated to/in use by [A:tce pan].",
    "id": "4vrgy9htcp"
  },
  {
    "name": "fnala",
    "type": "R",
    "key": "follows",
    "def": "[E:tce pan] follows [A:tce pan].",
    "id": "43dhivbbtp"
  },
  {
    "name": "funai",
    "type": "R",
    "key": "suggests",
    "def": "[E:tce pan] suggests that [A:()] should be true.",
    "id": "p1hilk9iyy"
  },
  {
    "name": "zotke",
    "type": "R",
    "key": "category",
    "def": "[E:tce* man] fits in category/genre [A:tce* man].",
    "id": "da729nzb96"
  },
  {
    "name": "jiune",
    "type": "R",
    "key": "n-th",
    "def": "[E:tca p] is the [O:tca gan]th (starts counting at 0) member of sequence [A:ebluse].\n",
    "id": "c66rr2j8fm"
  },
  {
    "name": "dzei",
    "type": "R",
    "key": "habit:",
    "def": "For the last [U:tce gan] (default: 100) occurences of [A:()] being true, it overlaps with an\noccurence of [O:()] being true [E:tce gan]% (between 0 and 1) of the time.\n",
    "notes": "If [A] occured less than than [E] times in the past, then only the number of occurences are\nconsidered.\n",
    "id": "a5sx15j283"
  },
  {
    "name": "zguhi",
    "type": "R",
    "key": "juice:",
    "def": "[E:tce pan] is juice made from something that satisfied [A:(tce pan)].\n",
    "notes": "[A] is not an entity but a property since the thing being made into juice may no longer exists.\n",
    "id": "4alugho403"
  },
  {
    "name": "cahil",
    "type": "R",
    "key": "egg",
    "def": "[E:tce pan] is an egg.\n",
    "id": "9hsax9mv0q"
  },
  {
    "name": "kelon",
    "type": "R",
    "key": "box",
    "def": "[E:tce pan] is a box.\n",
    "notes": "A rigid typically rectangular container with or without a cover. Its volume is not only the walls\nbut the volume between them.\n",
    "id": "kneckch5o6"
  },
  {
    "name": "pekmu",
    "type": "R",
    "key": "wall",
    "def": "[E:tce pan] is a wall/floor/ceiling of room/container [A:tce pan].\n",
    "notes": "A wall can be curved and stops at junctions with other walls where there is a marked\ndiscontinuity.\n",
    "id": "esc4oa97rr"
  },
  {
    "name": "ganol",
    "type": "R",
    "key": "chicken",
    "def": "[E:tce* pan] is a chicken.\n",
    "id": "hakbao1f1r"
  },
  {
    "name": "tcero",
    "type": "R",
    "key": "set-mapping",
    "def": "Members of [E:tce p] can be mapped one by one to members of [A:tce p] using relation [O:(tca p,tca p)].\n",
    "id": "kgx9ydzmch"
  },
  {
    "name": "flir",
    "type": "R",
    "key": "face",
    "def": "[E:tce* pan] is a face (body part).\n",
    "id": "3i3k6yr8jo"
  },
  {
    "name": "sibdin",
    "type": "R",
    "key": "toilet",
    "def": "[E:tce* pan] is a toilet.\n",
    "id": "a9blqu7rgx"
  },
  {
    "name": "stu",
    "type": "R",
    "key": "intensity:",
    "def": "[E:tce gan] is the intensity of [A:()].",
    "notes": "Evaluates [A] in intensity mode, which allows to measure the intensity of some concepts.\n\nIn normal mode, intensity-aware predicates evaluates to true if the intensity is above a minimum\nthreashold of 1. In intensity mode, this threashold is absent and thus they may evaluate to true\nfor lower values, which is compensated by having access to that intensity directly. We can thus\ncustomize the filter with another word to express new meanings: very, not much, negative\nintensity (like vs dislike), etc.\n\nTODO: What happen if there are multiple intensity aware predicates?\n",
    "id": "mw5tvl8xaj"
  },
  {
    "name": "ste",
    "type": "R",
    "key": "lightly:",
    "def": "[A:()] is lightly intense.",
    "notes": "Multiplies the intensity ({stu}) of [A] by 2, and state it must be between 0 and 1 excluded. This means\nthe intensity of [A] must be between 0 and 0.5. Is itself intensity-aware, so multiple {ste} can\nbe chained together with {voi/foi}, or {sti} can be used to negate the intensity.\n\nDue to the condition described above, if {ste ste X} is true then {ste X} is also true; \"lightly X\"\ncontains \"lightly lightly X\". Too express \"lightly\" without containing \"lightly lightly\", use\n{sta ste X}.\n",
    "id": "gbapurac5a"
  },
  {
    "name": "sta",
    "type": "R",
    "key": "moderately:",
    "def": "[A:()] is moderately intense.",
    "notes": "State that the intensity ({stu}) of [A] is between 0.5 and 1.5 excluded.\n",
    "id": "9pcea8l4be"
  },
  {
    "name": "sto",
    "type": "R",
    "key": "very:",
    "def": "[A:()] is very intense.",
    "notes": "Divides the intensity ({stu}) of [A] by 2, and state it must be greater than 1. This means the\nintensity of [A] must be greater than 2. Is itself intensity-aware, so multiple {ste} can be\nchained together with {voi/foi}, or {sti} can be used to negate the intensity.\n\nDue to the condition described above, if {sto sto X} is true then {sto X} is also true; \"very X\"\ncontains \"very very X\". Too express \"very\" without containing \"very very\", use\n{sta sto X}.\n",
    "id": "j179w2ippe"
  },
  {
    "name": "sti",
    "type": "R",
    "key": "anti:",
    "def": "[A:()] is negative with normal intensity.",
    "notes": "Multiplies the intensity ({stu}) of [A] by -1, and state it must be greater than 1. This means\nthe intensity of [A] must be less than -1. Is itself intensity-aware, so can be combined with\n{ste} and {sto} to increase or decrease the threashold. It should be said last/right-most in the\nintensity chain to properly use the conditions of the other intensity words.\n",
    "id": "cn9z8uo60i"
  },
  {
    "name": "klao",
    "type": "R",
    "key": "chain-rel",
    "def": "[E:p] satisfies relation [O:(p,p)] with the first member of list [A:blu p], and each non-final\nmember of [A] satisfies [O] with the following member.    \n",
    "id": "cbchzguehy"
  },
  {
    "name": "celuar",
    "type": "R",
    "key": "mushroom",
    "def": "[E:tce* pan] is a mushroom.",
    "id": "f1la1jggsk"
  },
  {
    "name": "teonin",
    "type": "R",
    "key": "rice",
    "def": "[E:tce* pan] is rice.",
    "id": "4jd51cfja3"
  },
  {
    "name": "jgelin",
    "type": "R",
    "key": "olive",
    "def": "[E:tce* pan] is an olive.",
    "id": "lsj67h3xv7"
  },
  {
    "name": "merean",
    "type": "R",
    "key": "onion",
    "def": "[E:tce* pan] is an onion.",
    "id": "2g3k5ais88"
  },
  {
    "name": "meloan",
    "type": "R",
    "key": "garlic head",
    "def": "[E:tce* pan] is a garlic head.",
    "id": "cyprcdsw9l"
  },
  {
    "name": "cpunu",
    "type": "R",
    "key": "fruit",
    "def": "[E:tce pan] is a fruit of [A:tce pan].",
    "id": "7ps3utese2"
  },
  {
    "name": "joeloi",
    "type": "R",
    "key": "oil",
    "def": "[E:tce* pan] is oil made from something that satisfies [A:(tce pan)].",
    "notes": "[E] is a liquid at room temperature and doesn't mix with water.\\\n[A] is not an entity but a property since the thing being made into oil no longer exists. \n",
    "id": "971azktj9b"
  },
  {
    "name": "gatfi",
    "type": "R",
    "key": "receipe:",
    "def": "[E:tce pan] is a receipe realized by satisfying [A:(tce pan)].",
    "notes": "Everything that satisfies [A] is a result of applying the receipe.\n",
    "id": "9wocwv8xz1"
  },
  {
    "name": "ctal",
    "type": "R",
    "key": "building",
    "def": "[E:tce* pan] is a building.",
    "id": "8q50y3hb3c"
  },
  {
    "name": "kalu",
    "type": "R",
    "key": "divided-from",
    "def": "[E:tce pan] are things that were divided from [A:(tce pan)].",
    "notes": "As [A] is being divided into [E], [A] cease to exist and [E] starts to exist, either at the same\ntime or at different times. {kalu} starts when all members of [E] exists. [A] is stated to\noccur before {kalu} starts.\n\n[E] can be a subset of all parts divided from [A], to speak about all the parts, use {tcihi}. If\nthere are multiple things being divided, [E] members can come from any of those things (hense why\nyou should use {tcihi} instead of {tcu}, as with {tcu} you would say that each part are individually\ndivided from multiple things, which is not the case).\n",
    "id": "j2zcgd5mek"
  },
  {
    "name": "filiel",
    "type": "R",
    "key": "pocket",
    "def": "[E:tce* pan] is a pocket.",
    "id": "gdpsn5c3de"
  },
  {
    "name": "trai",
    "type": "R",
    "key": "anger",
    "def": "[E:tce* pan] (default: bzael) is angry about [A:()] being true.",
    "id": "6vrbrkb4i6"
  },
  {
    "name": "kori",
    "type": "R",
    "key": "anxiety",
    "def": "[E:tce* pan] (default: bzael) is anxious about [A:()] being true.",
    "id": "vlw8psnhxu"
  },
  {
    "name": "tcai",
    "type": "R",
    "key": "awe",
    "def": "[E:tce* pan] (default: bzael) in awe of [A:()] being true.",
    "id": "lg39c0rlpd"
  },
  {
    "name": "kouli",
    "type": "R",
    "key": "awkward",
    "def": "[E:tce* pan] (default: bzael) feels awkward about [A:()] being true.",
    "id": "rynt2kga99"
  },
  {
    "name": "jdai",
    "type": "R",
    "key": "bored",
    "def": "[E:tce* pan] (default: bzael) is bored with [A:()] being true.",
    "id": "ildysddhvi"
  },
  {
    "name": "ksai",
    "type": "R",
    "key": "calm",
    "def": "[E:tce* pan] (default: bzael) feels calm about [A:()] being true.",
    "id": "sz89t72vcd"
  },
  {
    "name": "mreli",
    "type": "R",
    "key": "confusion",
    "def": "[E:tce* pan] (default: bzael) is confused about [A:()] being true.",
    "id": "wtncyvxjx4"
  },
  {
    "name": "geri",
    "type": "R",
    "key": "crave",
    "def": "[E:tce* pan] (default: bzael) craves [A:()] being true.",
    "id": "s2oebo53cd"
  },
  {
    "name": "gjoi",
    "type": "R",
    "key": "disgust",
    "def": "[E:tce* pan] (default: bzael) is disgusted by [A:()] being true.",
    "id": "5mrg0diog3"
  },
  {
    "name": "krei",
    "type": "R",
    "key": "sympathy",
    "def": "[E:tce* pan] (default: bzael) sympathises with [A:()] being true.",
    "id": "2ru9d94qgg"
  },
  {
    "name": "zgai",
    "type": "R",
    "key": "fear",
    "def": "[E:tce* pan] (default: bzael) is afraid about [A:()] being true.",
    "id": "540jap6p3s"
  },
  {
    "name": "prui",
    "type": "R",
    "key": "interest",
    "def": "[E:tce* pan] (default: bzael) is interested in [A:()] being true.",
    "id": "ysvvowy2y6"
  },
  {
    "name": "dole",
    "type": "R",
    "key": "romantic",
    "def": "[E:tce pan] (default: bzael) feels romantic about [A:()] being true.",
    "id": "9bee8fm3j5"
  },
  {
    "name": "fsuo",
    "type": "R",
    "key": "sexual",
    "def": "[E:tce pan] (default: bzael) feels sexual about [A:()] being true.",
    "id": "q7fefcwdki"
  },
  {
    "name": "vriai",
    "type": "R",
    "key": "nostalgia",
    "def": "[E:tce* pan] (default: bzael) is nostalgic about [A:()] being true.",
    "id": "ganixoaec2"
  },
  {
    "name": "plui",
    "type": "R",
    "key": "relief",
    "def": "[E:tce* pan] (default: bzael) feels relieved from [A:()] being true by [O:()] being true.",
    "id": "c2pm9lkdn5"
  },
  {
    "name": "jbini",
    "type": "R",
    "key": "surprise",
    "def": "[E:tce* pan] (default: bzael) is surprised by [A:()] being true.",
    "id": "mnqotqp5sn"
  },
  {
    "name": "vini",
    "type": "R",
    "key": "equiv",
    "def": "[E:p] is equivalent to [A:p].",
    "id": "95ce2as51c"
  },
  {
    "name": "zipfi",
    "type": "R",
    "key": "celebration",
    "def": "[E:tce pan] celebrates event described by [A:()].",
    "notes": "[E] thinks that [A] is currently occuring, but that may not be the case. Even\nif [A] is not the case, [E] are still celebrating.\n",
    "id": "u7kf297mm0"
  },
  {
    "name": "bjonil",
    "type": "R",
    "key": "movie",
    "def": "[E:tce* man] is a movie/film.",
    "id": "0hlik6cq1x"
  },
  {
    "name": "glunor",
    "type": "R",
    "key": "cake",
    "def": "[E:tce* pan] is a cake.",
    "id": "8ijl0xvmda"
  },
  {
    "name": "maul",
    "type": "R",
    "key": "vowel",
    "def": "[E:ecema] is a vowel.",
    "id": "bkpgt1idon"
  },
  {
    "name": "mahul",
    "type": "R",
    "key": "vhowel",
    "def": "[E:ecema] is one or more consecutive vowels, optionally including \"h\".",
    "notes": "Representation: V(h?V)*",
    "id": "385as7znlo"
  },
  {
    "name": "zguin",
    "type": "R",
    "key": "machine",
    "def": "[E:tce* pan] is a machine.",
    "id": "zaq3ewglh1"
  },
  {
    "name": "sfuer",
    "type": "R",
    "key": "windy",
    "def": "There is wind.",
    "notes": "It is considered windy if air is moving at 1 m/s or more.\nTODO: What should be the formula from air speed to intensity in intensy mode ({stu})?.\nTo speak about measured speed (in m/s for example), use {ckia}.\n",
    "id": "e99u95fxhm"
  },
  {
    "name": "fluer",
    "type": "R",
    "key": "current",
    "def": "There is current in a fluid.",
    "notes": "Current is considered significant if the fuild is moving at 0.1 m/s or more.\nTODO: What should be the formula from fluid speed to intensity in intensy mode ({stu})?.\nTo speak about measured speed (in m/s for example), use {ckia}.\n",
    "id": "qk39xzxgrf"
  },
  {
    "name": "guren",
    "type": "R",
    "key": "season",
    "def": "[E:tce* ski] is an occurence of a season.",
    "notes": "See compounds of {guren} for the actual seasons and for more restrictive categories.\n\nTODO: What is a season in general? Is it possible to define without enumerating all seasons from\nall season systems?\n",
    "id": "4n0llekfll"
  },
  {
    "name": "e tsae ban",
    "type": "C",
    "key": "conlang",
    "def": "[E:tce* ban] is a constructed language/conlang.",
    "id": "wf13qtgrwk"
  },
  {
    "name": "e boiur spoul",
    "type": "C",
    "key": "tortoise",
    "def": "[E:tce* pan] is a tortoise",
    "id": "krykgk8hic"
  },
  {
    "name": "e ber ban",
    "type": "C",
    "key": "eberban",
    "def": "[E:tca ban] is the eberban language.",
    "id": "l3hopxljdm"
  },
  {
    "name": "e uaotearoa stan",
    "type": "C",
    "key": "Aotearoa (New Zealand)",
    "def": "[E:tca stan] is Aotearoa (New Zealand).",
    "id": "0hmp09luqa"
  },
  {
    "name": "e ujbo ban",
    "type": "C",
    "key": "lojban",
    "def": "[E:tca ban] is the lojban language.",
    "id": "ngdssrwkz9"
  },
  {
    "name": "e ufranse ban",
    "type": "C",
    "key": "french language",
    "def": "[E:tca ban] is the french language.",
    "id": "prqgtxzvj7"
  },
  {
    "name": "e ufranse stan",
    "type": "C",
    "key": "France",
    "def": "[E:tca stan] is France.",
    "id": "ql0k4zdkcv"
  },
  {
    "name": "e uinglic ban",
    "type": "C",
    "key": "english language",
    "def": "[E:tca ban] is the english language.",
    "id": "funyada7wl"
  },
  {
    "name": "e unihon ban",
    "type": "C",
    "key": "japanese language",
    "def": "[E:tca ban] is the japanese language.",
    "id": "1x7rqmd7o9"
  },
  {
    "name": "e unihon stan",
    "type": "C",
    "key": "Japan",
    "def": "[E:tca stan] is Japan.",
    "id": "mpd6xpvqnk"
  },
  {
    "name": "e udjonguo ban",
    "type": "C",
    "key": "chinese language",
    "def": "[E:tca ban] is chinese language.",
    "id": "6b3k4qzh5t"
  },
  {
    "name": "e udjonguo stan",
    "type": "C",
    "key": "China",
    "def": "[E:tca stan] is China.",
    "id": "umjwjoi13h"
  },
  {
    "name": "e udoitce ban",
    "type": "C",
    "key": "german language",
    "def": "[E:tca ban] is german language.",
    "id": "ro6uq1ihpz"
  },
  {
    "name": "e udoitce stan",
    "type": "C",
    "key": "Germany",
    "def": "[E:tca stan] is Germany.",
    "id": "wrjrg2gvav"
  },
  {
    "name": "e umiser stan",
    "type": "C",
    "key": "Egypt",
    "def": "[E:tca stan] is Egypt.",
    "id": "vrbsurc6ev"
  },
  {
    "name": "e uhangu ban",
    "type": "C",
    "key": "south korean language",
    "def": "[E:tca ban] is south korean language.",
    "id": "hsclm6vdb3"
  },
  {
    "name": "e uhangu stan",
    "type": "C",
    "key": "South Korea",
    "def": "[E:tca stan] is South Korea.",
    "id": "j5qgrzg33d"
  },
  {
    "name": "e umaori ban",
    "type": "C",
    "key": "m\u0101ori language",
    "def": "[E:tca ban] is the m\u0101ori language (New Zealand).",
    "id": "5pkk20qhjt"
  },
  {
    "name": "e utcoson ban",
    "type": "C",
    "key": "north korean language",
    "def": "[E:tca ban] is north korean language.",
    "id": "xapwbat5r8"
  },
  {
    "name": "e utcoson stan",
    "type": "C",
    "key": "North Korea",
    "def": "[E:tca stan] is North Korea.",
    "id": "m9uia2qvmv"
  },
  {
    "name": "e utoan ban",
    "type": "C",
    "key": "Toaq language",
    "def": "[E:tca ban] is the Toaq language.",
    "id": "c8xqa37om4"
  },
  {
    "name": "e upolski ban",
    "type": "C",
    "key": "Polish language",
    "def": "[E:tca ban] is the Polish language.",
    "id": "52gcuxc8ly"
  },
  {
    "name": "e upolski stan",
    "type": "C",
    "key": "Poland",
    "def": "[E:tca ban] is Poland.",
    "id": "p5jeok3nug"
  },
  {
    "name": "e upona ban",
    "type": "C",
    "key": "Toki Pona language",
    "def": "[E:tca ban] is the Toki Pona language.",
    "id": "ur0huidr0e"
  },
  {
    "name": "e uafrikan ban",
    "type": "C",
    "key": "Afrikaans language",
    "def": "[E:tca ban] is the Afrikaans language.",
    "id": "5dgm2v0am1"
  },
  {
    "name": "e kre vire",
    "type": "C",
    "key": "guided visit",
    "def": "[E:tce* pan] visits [A:tce* pan] with guide [O:tce* pan].",
    "id": "t1wi0cej5p"
  },
  {
    "name": "e spie toril",
    "type": "C",
    "key": "parrot",
    "def": "[E:tce* pan] is a parrot.",
    "id": "z6av1nqtuf"
  },
  {
    "name": "e du zoi",
    "type": "C",
    "key": "paragraph",
    "def": "[E:tce* man] is a paragraph.",
    "id": "sw1lnyrbpe"
  },
  {
    "name": "e bino cnue",
    "type": "C",
    "key": "symptom",
    "def": "[E:tce* man] [ill/sickness] is characterized by symptom [A:tce* man].",
    "id": "o5vxdoahhm"
  },
  {
    "name": "e spua ckuil",
    "type": "C",
    "key": "home stellar body (Earth)",
    "def": "[E:tca pan] is the home stellar body of species [A:tce* man]\n(default: {flan}/humans, thus [E] defaults to Earth).\n",
    "id": "umamaeu1na"
  },
  {
    "name": "e spua ckuel",
    "type": "C",
    "key": "home star (Sun)",
    "def": "[E:tca pan] is the home star of species [A:tce* man]\n(default: {flan}/humans, thus [E] defaults to the Sun).\n",
    "id": "732rregyg8"
  },
  {
    "name": "e jveno kena",
    "type": "C",
    "key": "hugs",
    "def": "[E:tce* pan] hugs [A:tce* pan].",
    "id": "wvg2ebwap5"
  },
  {
    "name": "e kine buan",
    "type": "C",
    "key": "course",
    "def": "[E:tce* man] is a course teaching about subject [A:tce* man].",
    "lambda": "on ekinibun ke ka pi ke buan gla kine via seru ka",
    "id": "o9bwkmfwvs"
  },
  {
    "name": "e a ze",
    "type": "C",
    "key": "latest-assertion",
    "def": "Repeats the previous assertion. See {a} notes.",
    "id": "mfyipbixdd"
  },
  {
    "name": "e al ze",
    "type": "C",
    "key": "latest-request",
    "def": "Repeats the previous request. See {al} notes.",
    "id": "s2gdsl21l7"
  },
  {
    "name": "e bzael mua",
    "type": "C",
    "key": "set-opiner:",
    "def": "[E:tce man] is an opiner that makes the proposition [A:()] true.",
    "notes": "See {bzael} for explanations.",
    "id": "hshwh0yqhx"
  },
  {
    "name": "e ca ma",
    "type": "C",
    "key": "eberban-quote",
    "def": "[E:tce* man] is a grammatically valid Eberban quote.",
    "notes": "Can be constructed using {ca}.",
    "id": "2vi80y570m"
  },
  {
    "name": "e tari pure",
    "type": "C",
    "key": "listens",
    "def": "[E:tce* pan] listens to [A:tce* man].",
    "notes": "[E] tries to hear [A].",
    "id": "9v79ww9nwi"
  },
  {
    "name": "e ban ci",
    "type": "C",
    "key": "word",
    "def": "[E:tce* man] is a word in language [A:tce* man] (default: eberban).",
    "id": "oqk7vz0ubt"
  },
  {
    "name": "e ci vini",
    "type": "C",
    "key": "word-meaning",
    "def": "[E:tce* man] (quote or word) have a meaning equivalent to [A:p] in language [O: tce* man] (default: eberban).",
    "notes": "[A] is a possible meaning of [E].\n",
    "id": "9ravc9ou95"
  },
  {
    "name": "e co ma",
    "type": "C",
    "key": "string of data",
    "def": "[E:tce* man] is a string of data.",
    "id": "4u8h1cwf6p"
  },
  {
    "name": "e ti denai",
    "type": "C",
    "key": "Monday",
    "def": "Now is a Monday, which is the day [E:tce gien] of [A:()] (default: {garei}).",
    "id": "gvgo57y1k1"
  },
  {
    "name": "e te denai",
    "type": "C",
    "key": "Tuesday",
    "def": "Now is a Thuesday, which is the day [E:tce gien] of [A:()] (default: {garei}).",
    "id": "wdnqacd5fb"
  },
  {
    "name": "e ta denai",
    "type": "C",
    "key": "Wednesday",
    "def": "Now is a Wednesday, which is the day [E:tce gien] of [A:()] (default: {garei}).",
    "id": "dut0zinzmi"
  },
  {
    "name": "e to denai",
    "type": "C",
    "key": "Thursday",
    "def": "Now is a Thursday, which is the day [E:tce gien] of [A:()] (default: {garei}).",
    "id": "maomhd37vd"
  },
  {
    "name": "e tu denai",
    "type": "C",
    "key": "Friday",
    "def": "Now is a Friday, which is the day [E:tce gien] of [A:()] (default: {garei}).",
    "id": "5pxlkakuie"
  },
  {
    "name": "e tie denai",
    "type": "C",
    "key": "Saturday",
    "def": "Now is a Saturday, which is the day [E:tce gien] of [A:()] (default: {garei}).",
    "id": "eyxmjzfra3"
  },
  {
    "name": "e tia denai",
    "type": "C",
    "key": "Sunday",
    "def": "Now is a Sunday, which is the day [E:tce gien] of [A:()] (default: {garei}).",
    "id": "k2mw091d8h"
  },
  {
    "name": "en ce peu sa",
    "type": "C",
    "key": "spelled",
    "def": "[E:tca man] is spelled as [A:tca ecoma]",
    "id": "000sw1j82d"
  },
  {
    "name": "en ceu peu sa",
    "type": "C",
    "key": "uttered",
    "def": "[E:tca man] is uttered as [A:tca ecoma]",
    "id": "b0pxo862df"
  },
  {
    "name": "e a sai",
    "type": "C",
    "key": "asserts:",
    "def": "[E:tce pan] asserts that [A:()] is true.",
    "notes": "{a !X} is syntactic sygar for {on <e a ze> !X onu !P be mi <e a sai> <e a ze>}.\n",
    "id": "5kgq6jl1at"
  },
  {
    "name": "e al sai",
    "type": "C",
    "key": "requests:",
    "def": "[E:tce pan] requests/order that [A:()] is true.",
    "notes": "{al !X} is syntactic sygar for {on <e al ze> !X onu !P be mi <e al sai> <e al ze>}.\n",
    "id": "wg9fbpescm"
  },
  {
    "name": "e o sai",
    "type": "C",
    "key": "asks",
    "def": "[E:tce pan] asks question represented by predicate [A:p] to addressee [O:tce man].",
    "notes": "{o !X !Y} can be modeled as being syntactic sugar for {oni !P !X onu !R be mi\n<e o sai> via !P fo mo}. R is an unnamable predicate used as an axiom, as uttering the question\nis performative in itself. Thus there is no need to name this axiom to be able to disable it, and\nfurther questions will not disable axioms for previous questions.\n",
    "id": "b0c73ecend"
  },
  {
    "name": "e on peu",
    "type": "C",
    "key": "dictionary",
    "def": "[E:tce* pan] is a dictionary.",
    "notes": "Can be either a physical artifact or an abstract dictionary representing all the words of\na language at some point in time.\n",
    "id": "jpvb7ytjfg"
  },
  {
    "name": "en skal co sa",
    "type": "C",
    "key": "computer-data",
    "def": "[E:tca ecoma] is the computer data located at [A:tce ecoma].",
    "notes": "[A] should be a unique identifier representing how and where the content\ncan be fetched.\n",
    "id": "vmbujokvfo"
  },
  {
    "name": "e blu ski",
    "type": "C",
    "key": "occurence-list:",
    "def": "[E:blu ski] is the list of occurences of [A:()] (in the past and the future), orderer by chronologically increasing starting time.",
    "id": "f24mp2j8zu"
  },
  {
    "name": "en sru blu ski",
    "type": "C",
    "key": "future-occurencies:",
    "def": "[E:blu ski] is the list of future occurences of [A:()], ordered by chronologically increasing starting time.\n",
    "notes": "The first element of the list is the closest event from the present/reference time, but will not include present occurences.\n",
    "id": "o6taqi388f"
  },
  {
    "name": "en sre blu ski",
    "type": "C",
    "key": "past-occurencies:",
    "def": "[E:blu ski] is the list of past occurences of [A:()], ordered by chronologically decreasing starting time.\n",
    "notes": "The first element of the list is the closest event from the present/reference time, but will not include present occurences.\n",
    "id": "exaqlp8qex"
  },
  {
    "name": "en srai blu ski",
    "type": "C",
    "key": "again:",
    "def": "Now occurs an member of [E:blu ski], which is the list of past and present occurences of [A:()],\nordered by chronologically decreasing starting time.\n",
    "id": "2w8tryjheb"
  },
  {
    "name": "e ti sre",
    "type": "C",
    "key": "just-before:",
    "def": "[A:()] occurs less than 1 second (excluded) before [E:tca ski] (default: current context event).",
    "id": "ey5f5raem9"
  },
  {
    "name": "e ti sru",
    "type": "C",
    "key": "just-after:",
    "def": "[A:()] occurs less than 1 second (excluded) after [E:tca ski] (default: current context event).",
    "id": "9egdpvfgwq"
  },
  {
    "name": "e vola sre",
    "type": "C",
    "key": "seconds-before:",
    "def": "[A:()] occurs seconds (between 1 second included and 1 minute excluded) before [E:tca ski] (default: current context event).",
    "id": "10utjcfexx"
  },
  {
    "name": "e vola sru",
    "type": "C",
    "key": "seconds-after:",
    "def": "[A:()] occurs seconds (between 1 second included and 1 minute excluded) after [E:tca ski] (default: current context event).",
    "id": "n7vb7za2mu"
  },
  {
    "name": "e jero sre",
    "type": "C",
    "key": "minutes-before:",
    "def": "[A:()] occurs minutes (between 1 minute included and 1 hour excluded) before [E:tca ski] (default: current context event).",
    "id": "4bie8njlb2"
  },
  {
    "name": "e jero sru",
    "type": "C",
    "key": "minutes-after:",
    "def": "[A:()] occurs minutes (between 1 minute included and 1 hour excluded) after [E:tca ski] (default: current context event).",
    "id": "0zwjen7xl9"
  },
  {
    "name": "e sura sre",
    "type": "C",
    "key": "hours-before:",
    "def": "[A:()] occurs hours (between 1 hour included and 1 day excluded) before [E:tca ski] (default: current context event).",
    "id": "p9ghshgmxj"
  },
  {
    "name": "e sura sru",
    "type": "C",
    "key": "hours-after:",
    "def": "[A:()] occurs hours (between 1 hour included and 1 day excluded) after [E:tca ski] (default: current context event).",
    "id": "7a95uf6jrp"
  },
  {
    "name": "e dena sre",
    "type": "C",
    "key": "days-before:",
    "def": "[A:()] occurs days (between 1 day included and 1 week excluded) before [E:tca ski] (default: current context event).",
    "id": "ftmheg89q2"
  },
  {
    "name": "e dena sru",
    "type": "C",
    "key": "days-before:",
    "def": "[A:()] occurs days (between 1 day included and 1 week excluded) after [E:tca ski] (default: current context event).",
    "id": "4lbwp00732"
  },
  {
    "name": "e kora sre",
    "type": "C",
    "key": "weeks-before:",
    "def": "[A:()] occurs weeks (between 1 week included and 1 month excluded) before [E:tca ski] (default: current context event).",
    "id": "f1b1jrcuud"
  },
  {
    "name": "e kora sru",
    "type": "C",
    "key": "weeks-after:",
    "def": "[A:()] occurs weeks (between 1 week included and 1 month excluded) after [E:tca ski] (default: current context event).",
    "id": "m1rwaj12jg"
  },
  {
    "name": "e gare sre",
    "type": "C",
    "key": "months-before:",
    "def": "[A:()] occurs months (between 1 month included and 1 year excluded) before [E:tca ski] (default: current context event).",
    "id": "zgllh2qv0q"
  },
  {
    "name": "e gare sru",
    "type": "C",
    "key": "months-after:",
    "def": "[A:()] occurs months (between 1 month included and 1 year excluded) after [E:tca ski] (default: current context event).",
    "id": "x89ati1htd"
  },
  {
    "name": "e bire sre",
    "type": "C",
    "key": "years-before:",
    "def": "[A:()] occurs years (more than 1 year included) before [E:tca ski] (default: current context event).",
    "id": "4xvmmgdql6"
  },
  {
    "name": "e bire sru",
    "type": "C",
    "key": "years-after:",
    "def": "[A:()] occurs years (more than 1 year included) after [E:tca ski] (default: current context event).",
    "id": "wc4y2k476a"
  },
  {
    "name": "e glon sa",
    "type": "C",
    "key": "plays",
    "def": "[E:tce pan] plays game [A:tce* pan].",
    "notes": "Implies that there is a player [E].",
    "id": "j31as5z1tr"
  },
  {
    "name": "e glon skol",
    "type": "C",
    "key": "video game",
    "def": "[E:tce pan] is a video game.",
    "notes": "[E] is not necessarily a game played on a computer, but can also be on game consoles or phone.",
    "id": "dyp4u0gi58"
  },
  {
    "name": "e filiel skal",
    "type": "C",
    "key": "smartphone",
    "def": "[E:tce pan] is a smartphone.",
    "id": "tmtoheohak"
  },
  {
    "name": "e buan spenu",
    "type": "C",
    "key": "reads",
    "def": "[E:tce* pan] reads [A:tce* pan].",
    "id": "mf42sda4or"
  },
  {
    "name": "e jero sonul",
    "type": "C",
    "key": "clock",
    "def": "[E:tce* pan] is a clock/watch.",
    "id": "rnerw0268q"
  },
  {
    "name": "e skan sonul",
    "type": "C",
    "key": "chronometer",
    "def": "[E:tce* pan] is a chronometer.",
    "id": "dsjjxhug6w"
  },
  {
    "name": "e mi me",
    "type": "C",
    "key": "this",
    "def": "[E:tce* pan] is this, something specific the speaker have in mind which is near the speaker.",
    "notes": "TODO: Should the \"near\" distance be left vague or be more precise like with {epseopane}?\n",
    "id": "vq36s4o59o"
  },
  {
    "name": "e mo me",
    "type": "C",
    "key": "this",
    "def": "[E:tce* pan] is that, something specific the speaker have in mind which is near the listener.",
    "notes": "TODO: Should the \"near\" distance be left vague or be more precise like with {epseopane}?\n",
    "id": "yv0djrrsio"
  },
  {
    "name": "e moe me",
    "type": "C",
    "key": "that younder",
    "def": "[E:tce* pan] is that younder, something specific the speaker have in mind which is neither near the speaker or the listener.",
    "notes": "TODO: Should the \"near\" distance be left vague or be more precise like with {epseopane}?\n",
    "id": "ffh43wbw7b"
  },
  {
    "name": "e uiuro sfia",
    "type": "C",
    "key": "EUR",
    "def": "[E:tce gan] is 1 euro (EUR) times [A:tce gan] (default: 1).",
    "id": "q15u6virsz"
  },
  {
    "name": "e u'uzdolar sfia",
    "type": "C",
    "key": "USD",
    "def": "[E:tce gan] is 1 US dollar (USD) times [A:tce gan] (default: 1).",
    "id": "9uzfmtxv63"
  },
  {
    "name": "e uien sfia",
    "type": "C",
    "key": "JPY",
    "def": "[E:tce gan] is 1 japanese yen (JPY) times [A:tce gan] (default: 1).",
    "id": "hi161hj19u"
  },
  {
    "name": "e usterlin sfia",
    "type": "C",
    "key": "GBP",
    "def": "[E:tce gan] is 1 pound sterling (GBP) times [A:tce gan] (default: 1).",
    "id": "qp8jmenoxz"
  },
  {
    "name": "e uiuan sfia",
    "type": "C",
    "key": "CNY/RMB",
    "def": "[E:tce gan] is 1 chinese yuan (CNY/RMB) times [A:tce gan] (default: 1).",
    "id": "k9rr7y024a"
  },
  {
    "name": "e uaudolar sfia",
    "type": "C",
    "key": "AUD",
    "def": "[E:tce gan] is 1 australian dollar (AUD) times [A:tce gan] (default: 1).",
    "id": "1mub34ta75"
  },
  {
    "name": "e ubitkoin sfia",
    "type": "C",
    "key": "BTC",
    "def": "[E:tce gan] is 1 bitcoin (BTC) times [A:tce gan] (default: 1).",
    "id": "fljiscc9x2"
  },
  {
    "name": "e mune dzei",
    "type": "C",
    "key": "usually:",
    "def": "For the last [U:tce gan] (default: 100) occurences of [A:()] being true, it overlaps with an\noccurence of [O:()] being true at least [E:tce gan]% (between 0 and 1, default: 0.75) of the time.\n",
    "notes": "If [A] occured less than than [E] times in the past, then only the number of occurences are\nconsidered.\n",
    "id": "qzvvawa21k"
  },
  {
    "name": "e mine dzei",
    "type": "C",
    "key": "rarely:",
    "def": "For the last [U:tce gan] (default: 100) occurences of [A:()] being true, it overlaps with an\noccurence of [O:()] being true at most [E:tce gan]% (between 0 and 1, default: 0.25) of the time.\n",
    "notes": "If [A] occured less than than [E] times in the past, then only the number of occurences are\nconsidered.\n",
    "id": "t43uk5ejj2"
  },
  {
    "name": "e gien tcia",
    "type": "C",
    "key": "integer-subset",
    "def": "[E:tce gien] is the subset of all intergers (unitless) in [A:tce gan].\n",
    "id": "57282n39r3"
  },
  {
    "name": "e zai man",
    "type": "C",
    "key": "name",
    "def": "[E:tce man] is a name of [A:tce man] given by [O:tce pan].\n",
    "id": "5regih2sfj"
  },
  {
    "name": "e blu jnuhi",
    "type": "C",
    "key": "increasing-order:",
    "def": "[E:blu p] is ordered from smallest to largest according to measuring relation [A:(tce gan,tca p)].\n",
    "id": "7y4m7u346i"
  },
  {
    "name": "e blu jnihi",
    "type": "C",
    "key": "decreasing-order:",
    "def": "[E:blu p] is ordered from largest to smalest according to measuring relation [A:(tce gan,tca p)].\n",
    "id": "2ivqr4ouem"
  },
  {
    "name": "en tcu blu jnuhi",
    "type": "C",
    "key": "all-increasing-ordered:",
    "def": "[E:blu p] is the list of all things that satisfy measuring relation [A:(tce gan,tca p)], ordered from smallest to largest.\n",
    "notes": "Can be used to rank all things satisfying a property using a single relation [A], instead of manually constructing a list\nfrom a {tcu} and then ordering it with {blu jnuhi}.\n",
    "id": "jk9v121j7v"
  },
  {
    "name": "en tcu blu jnihi",
    "type": "C",
    "key": "all-decreasing-ordered:",
    "def": "[E:blu p] is the list of all things that satisfy measuring relation [A:(tce gan,tca p)], ordered from largest to smallest.\n",
    "id": "oe7dbtrqpk"
  },
  {
    "name": "e ban sa",
    "type": "C",
    "key": "language",
    "def": "[E:tce* ecoma] is expressed in language [A:tce* ban].",
    "id": "cvbgy6pdjn"
  },
  {
    "name": "e stan sa",
    "type": "C",
    "key": "citizen",
    "def": "[E:tce* pan] is a citizen of [A:tce* pan].\n",
    "id": "038s3l4yp4"
  },
  {
    "name": "e me gi",
    "type": "C",
    "key": "(elliptical)",
    "def": "An intransitive elliptical predicate the speaker has in mind.\n",
    "id": "b9jvmkt3og"
  },
  {
    "name": "e me ge",
    "type": "C",
    "key": "(elliptical)",
    "def": "A transitive sharing elliptical predicate the speaker has in mind.\n",
    "id": "5pvigdcc8w"
  },
  {
    "name": "e me gei",
    "type": "C",
    "key": "(elliptical)",
    "def": "A transitive equivalence elliptical predicate the speaker has in mind.\n",
    "id": "n2i7r6eiwc"
  },
  {
    "name": "e blan sai",
    "type": "C",
    "key": "beautifully:",
    "def": "[A:()] occurs beautifully according to [E:tce man] (default: {bzael}).",
    "id": "b14thh7qux"
  },
  {
    "name": "e ski kagve",
    "type": "C",
    "key": "event@context",
    "def": "[E:tca ski] is the \"current event\" contained in context [A:c].",
    "id": "16sqxburhy"
  },
  {
    "name": "e toro zlier",
    "type": "C",
    "key": "elbow",
    "def": "[E:tce* pan] is an elbow.",
    "id": "j8hqhxb3ij"
  },
  {
    "name": "e toro zlior",
    "type": "C",
    "key": "knee",
    "def": "[E:tce* pan] is a knee.",
    "id": "90bxf8eqsg"
  },
  {
    "name": "e zlier kenen",
    "type": "C",
    "key": "wrist",
    "def": "[E:tce* pan] is a wrist.",
    "id": "pnn6qjo0p8"
  },
  {
    "name": "e zlior kenon",
    "type": "C",
    "key": "ankle",
    "def": "[E:tce* pan] is a ankle.",
    "id": "axlpdctp7v"
  },
  {
    "name": "e treun zlier",
    "type": "C",
    "key": "shoulder",
    "def": "[E:tce* pan] is a shoulder.",
    "id": "dx28ywfi3h"
  },
  {
    "name": "e treun kirun",
    "type": "C",
    "key": "neck",
    "def": "[E:tce* pan] is a neck.",
    "id": "06rcemltv3"
  },
  {
    "name": "e treun zlior",
    "type": "C",
    "key": "hip",
    "def": "[E:tce* pan] is a hip.",
    "id": "70o68q45ps"
  },
  {
    "name": "e zinul jiu",
    "type": "C",
    "key": "nth-finger",
    "def": "[A:tce* pan] is the [E:tce gan]th finger of a hand/foot.",
    "notes": "[E] is 0-indexed.\n\nWhen looking at the upper side of the hand/foot, the fingers are ordered from back-interior to front to back-exterior.\nIf a finger is considered to be the in the middle of the back then it is considered the first.\n",
    "id": "wbul6chj24"
  },
  {
    "name": "e tian sa",
    "type": "C",
    "key": "eats",
    "def": "[E:tce pan] eats [A:tce pan].",
    "id": "fp326p16jr"
  },
  {
    "name": "e kalan sa",
    "type": "C",
    "key": "drinks",
    "def": "[E:tce* pan] drinks [A:tce* pan].",
    "id": "egsqs45rsj"
  },
  {
    "name": "e pane penu",
    "type": "C",
    "key": "back-part",
    "def": "[E:tce* pan] is in the back part of [A:tce* pan].",
    "notes": "[A] must be something that have clearly identified front-back direction and\nestablished middle-point (usually the center of mass).\n",
    "id": "5l5ploryal"
  },
  {
    "name": "e pane pena",
    "type": "C",
    "key": "front-part",
    "def": "[E:tce* pan] is in the front part of [A:tce* pan].",
    "notes": "[A] must be something that have clearly identified front-back direction and\nestablished middle-point (usually the center of mass).\n",
    "id": "qf0g5dw7fq"
  },
  {
    "name": "e pane peno",
    "type": "C",
    "key": "left-part",
    "def": "[E:tce* pan] is in the left part of [A:tce* pan].",
    "notes": "[A] must be something that have clearly identified left-right direction and\nestablished middle-point (usually the center of mass).\n",
    "id": "i8zmc7teu4"
  },
  {
    "name": "e pane pene",
    "type": "C",
    "key": "right-part",
    "def": "[E:tce* pan] is in the right part of [A:tce* pan].",
    "notes": "[A] must be something that have clearly identified left-right direction and\nestablished middle-point (usually the center of mass).\n",
    "id": "1h0a4yvlln"
  },
  {
    "name": "e pane peniu",
    "type": "C",
    "key": "top-part",
    "def": "[E:tce* pan] is in the top part of [A:tce* pan].",
    "notes": "[A] must be something that have clearly identified top-bottom direction and\nestablished middle-point (usually the center of mass).\n",
    "id": "glg7ptsf4i"
  },
  {
    "name": "e pane penie",
    "type": "C",
    "key": "bottom-part",
    "def": "[E:tce* pan] is in the bottom part of [A:tce* pan].",
    "notes": "[A] must be something that have clearly identified top-bottom direction and\nestablished middle-point (usually the center of mass).\n",
    "id": "i2p4fkz8u5"
  },
  {
    "name": "e tcu zoli",
    "type": "C",
    "key": "with-all-tools:",
    "def": "[A:()] is realised using all tools [E:tce man].",
    "id": "idx3jnwsgj"
  },
  {
    "name": "e tian tsau",
    "type": "C",
    "key": "cooking",
    "def": "[E:tce* pan] is cooked (food crafting) by [A:tce pan].",
    "id": "qdwr2zidwf"
  },
  {
    "name": "e cfen mula",
    "type": "C",
    "key": "litre",
    "def": "[E:tce gan] is 1 litre (10^-3 m3) times [A:tce gan] (default: 1).",
    "id": "2rf720dxu3"
  },
  {
    "name": "e cnue meloan",
    "type": "C",
    "key": "garlic clove",
    "def": "[E:tce* pan] is a garlic clove.",
    "id": "9fc31ltwy9"
  },
  {
    "name": "e kine ctal",
    "type": "C",
    "key": "school",
    "def": "[E:tce* pan] is a school/educational building.",
    "id": "wlqy92kdaz"
  },
  {
    "name": "e spua ctal",
    "type": "C",
    "key": "residential building",
    "def": "[E:tce* pan] is a house/residential building.",
    "id": "urxuw8ethp"
  },
  {
    "name": "e pnuen cpie",
    "type": "C",
    "key": "height",
    "def": "[E:tce gan] (length) is the height (up-down length) of [A:tce pan].",
    "id": "fb6aza9xej"
  },
  {
    "name": "e pneon cpie",
    "type": "C",
    "key": "width",
    "def": "[E:tce gan] (length) is the width (left-right length) of [A:tce pan].",
    "id": "ie3rzd0ac7"
  },
  {
    "name": "e pnaun cpie",
    "type": "C",
    "key": "depth",
    "def": "[E:tce gan] (length) is the depth (front-back length) of [A:tce pan].",
    "id": "vxeydlyrp7"
  },
  {
    "name": "e cpuan kalu",
    "type": "C",
    "key": "slice",
    "def": "[E:tce pan] are slices that were sliced from [A:(tce pan)].",
    "notes": "See {kalu} explanations.\n\n[E] are cut following close-to-parallel planes. Slices [E] have their up-down direction matching\nthe tangent of their cutting plane, such that height corresponds to thickness.\n",
    "id": "upob68pr52"
  },
  {
    "name": "en an skun sai",
    "type": "C",
    "key": "set-time-anchor:",
    "def": "[E:p] is the current context with time anchor being changed to [A:(tca ski)].",
    "notes": "[A] is a property so that the time anchor can change between sentences by depending on other context\ninformation, like {sufkun} (present) which makes the present move \"forward in time\" between sentences.\n",
    "id": "d6ahqqz2b3"
  },
  {
    "name": "e tian katmi",
    "type": "C",
    "key": "hungry",
    "def": "[E:tce* pan] is hungry for food satisfying property [A:(tce pan)]."
  },
  {
    "name": "e bzael krei",
    "type": "C",
    "key": "empathy",
    "def": "[E:tce* pan] (default: bzael) empathises for [A:()] being true.",
    "id": "9ghhob4dpk"
  },
  {
    "name": "e fsuo katmi",
    "type": "C",
    "key": "sexual desire",
    "def": "[E:tce* pan] (default: bzael) sexually desires that [A:()] be the case.",
    "id": "e4do0r7a33"
  },
  {
    "name": "e birei denai",
    "type": "C",
    "key": "anniversary",
    "def": "Now is an (day) anniversary of [A:()].",
    "notes": "This event correspond to full day(s). If [A] occured on the N-th day of a year,\nthen any following N-day of a year will be an anniversary of [A].\n\nIf [A] spanned over multiple days, then the anniversary will too span over multiple\ndays. If you want a 1 day anniversary for a multi-day event, speak about its\nstart {sra} or end {sro}.\n",
    "id": "xzpesschjb"
  },
  {
    "name": "e sahar flur",
    "type": "C",
    "key": "flowering-plant",
    "def": "[E:tce* pan] is a flowering plant.",
    "id": "og9kw8xlsk"
  },
  {
    "name": "e bjonil ctal",
    "type": "C",
    "key": "cinema",
    "def": "[E:tce* pan] is a cinema/movie theater.",
    "id": "b1maacrtqm"
  },
  {
    "name": "e blu se",
    "type": "C",
    "key": "list",
    "def": "[E:ma] is a list.",
    "notes": "It doesn't state anything about its items, and allows them to even be of different types,\nwhich {blu} doesn't allow.\n",
    "id": "op39jgoygr"
  },
  {
    "name": "e te bleu",
    "type": "C",
    "key": "1-list",
    "def": "[E:p] is the only member of list [A:blu p].",
    "id": "nqcbn7rmem"
  },
  {
    "name": "e ta bleu",
    "type": "C",
    "key": "2-list",
    "def": "[E:p] and [A:b] are the only members (in order) of list [A:ebluse].",
    "id": "crzlw151ac"
  },
  {
    "name": "e sfuer zguin",
    "type": "C",
    "key": "fan",
    "def": "[E:tce pan] is a fan (wind-making machine).",
    "id": "qlqy5bxoso"
  },
  {
    "name": "e blu mae",
    "type": "C",
    "key": "list-appl:",
    "def": "Evaluates predicate [A:(...)] with list of arguments [E:ebluse].",
    "id": "jg0kn1bef7"
  },
  {
    "name": "e flur vahul",
    "type": "C",
    "key": "plant-based milk",
    "def": "[E:tce* pan] is plant-based milk made from plants satisfying [A:(tce pan)].",
    "id": "91cvojysmg"
  },
  {
    "name": "e caun vahul",
    "type": "C",
    "key": "plant-based milk",
    "def": "[E:tce* pan] is milk that was produced by lactating animals satisfying [A:(tce pan)].",
    "id": "qefotcaezf"
  },
  {
    "name": "en tu pini guren",
    "type": "C",
    "key": "meteorological season",
    "def": "[E:tce* ski] is a meteorological season (winter/spring/summer/autumn).",
    "notes": "Compound refers to the 4-seasons system that switches between the north and south hemisphere.\n",
    "id": "fpqty9e5c6"
  },
  {
    "name": "e mliel guren",
    "type": "C",
    "key": "winter",
    "def": "[E:tce* ski] is a winter season.",
    "notes": "Uses the meteorological seasons definition, which begins on the first day of the month that\ninclude the corresponding equinox or soltice, and spans 3 months. It also depends on the location,\nas seasons are swapped between north and south hemisphere.\n\n- In north hemisphere, spans from December 1 to February 28 (29 in a leap year).\\\n- In south hemisphere, spans from June 1 to August 31.\n",
    "id": "dci7ddkc8v"
  },
  {
    "name": "e sahar guren",
    "type": "C",
    "key": "spring",
    "def": "[E:tce* ski] is a spring season.",
    "notes": "Uses the meteorological seasons definition, which begins on the first day of the month that\ninclude the corresponding equinox or soltice, and spans 3 months. It also depends on the location,\nas seasons are swapped between north and south hemisphere.\n\n- In north hemisphere, spans from March 1 to May 31.\\\n- In south hemisphere, spans from Septembre 1 to November 30.\n",
    "id": "bnpo8nb1px"
  },
  {
    "name": "e mlial guren",
    "type": "C",
    "key": "summer",
    "def": "[E:tce* ski] is a summer season.",
    "notes": "Uses the meteorological seasons definition, which begins on the first day of the month that\ninclude the corresponding equinox or soltice, and spans 3 months. It also depends on the location,\nas seasons are swapped between north and south hemisphere.\n\n- In north hemisphere, spans from June 1 to August 31.\\\n- In south hemisphere, spans from December 1 to February 28 (29 in a leap year).\n",
    "id": "eebgcxilaa"
  },
  {
    "name": "e suhur guren",
    "type": "C",
    "key": "autumn",
    "def": "[E:tce* ski] is an autumn season.",
    "notes": "Uses the meteorological seasons definition, which begins on the first day of the month that\ninclude the corresponding equinox or soltice, and spans 3 months. It also depends on the location,\nas seasons are swapped between north and south hemisphere.\n\n- In north hemisphere, spans from Septembre 1 to November 30.\\\n- In south hemisphere, spans from March 1 to May 31.\n",
    "id": "fdg4wm00j7"
  },
  {
    "name": "e pseo pane",
    "type": "C",
    "key": "inside-radius",
    "def": "[E:tce pan] is located at less than [O:tce gan] (distance) (default: 1 meter) from [A:tce pan].",
    "notes": "Default value of [O] conveys meaning of \"near\"/\"next to\" for human-size day-to-day conversation.\n",
    "id": "r8ei7d1riz"
  },
  {
    "name": "e pseo pale",
    "type": "C",
    "key": "outside-radius",
    "def": "[E:tce pan] is located at more than [O:tce gan] (distance) (default: 1 meter) from [A:tce pan].",
    "id": "lq1uvzug5t"
  }
]
const renderEntry = (entry) => {

  return `
    <dl class="entry">
      <dt>
        <a href="?q=${entry.name}" class="wordbox"><b>${entry.name}</b></a>
      </dt><dd>
      <ul>
      <li><span>›&emsp;${entry.def.replace(/\[([^\[\]]+)\]/g,"<div class='arg'>$1</div>")}</span></li>
      </ul></dd>
    </dl>`;
}
const powers_of_ten = [""," heı", " fue", " bıq"];
const digits = ["","shı", "gu","saq","jo","fe","cı","dıaı","roaı","neı"];


const numbermaker= (n) =>  {

return ``; 
}

const desc = "sá chuo lâ joaı báq toa - dictionary searcher for conlangs";
const rankEntries= (data, qRaw) =>  {
  const query = qRaw.toLowerCase().replace(" ", "");
  const qDef = qRaw.toLowerCase();
  console.log(DICT, "a");
  let a =  data
    .map(entry => {
      const word = entry.name.toLowerCase().replace(" ", "");
      const def = entry.def.toLowerCase();
      const defwords = def.split(" ");
      const key = (entry.key || "");
      
      let s = 0;
      if (key === query) s += 10;
      if (word === qRaw) s += 8;
      else if (word === query) s += 7;
      else if (word.startsWith(query)) s += 5
      else if (word.includes(query)) s += 4;
      if (defwords.includes(qDef)) s += 5;
      else if (defwords.includes(qDef+"s")||defwords.includes(qDef+"ing")) s += 2;
      else if (def.includes(qDef)) s += 1;
      if (!s) return null;
      
      return {entry, rank: s};
    }).filter(Boolean).sort((a, b) => b.rank - a.rank).map(x => x.entry);
    return a
}
export {DICT, desc, renderEntry, numbermaker,rankEntries};
