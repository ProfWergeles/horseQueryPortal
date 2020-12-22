# takes a table generated by the database software and combines the measurement types

# -*- coding: utf-8 -*-
"""
Created on Tue Nov  3 14:24:17 2020

@author: royal
"""
# to use it to concatenate tables, you want to createTable from the input file
# then append more files to the first created table with appendCSV
# once enough tables are appended, you can run queryTableExport

import pandas as pd
import argparse
import numpy as np

def createTable(inputfile):
    #print(inputfile)
    workingDf = pd.read_csv(inputfile)
    #print(workingDf)
    return workingDf

def appendCSV(workingDf, inputfile):
    df2 = createTable(inputfile)
    print("input from ", inputfile, df2)
    workingDf = pd.concat([workingDf, df2], ignore_index=True)
    return workingDf  

def nonCLI1(inputfile, outputfile):
    print(inputfile, outputfile)
    inputDf = pd.read_csv(inputfile)
    #print(inputDf)
    outputDf = pd.DataFrame()
    print("Will attempt to use function parameters as filenames, working...")
    outputDf = goQuery1(inputDf)
    #print(outputDf)
    outputDf.to_csv(outputfile)
    print("Exported to", outputfile)
    
def nonCLI2(inputfile, outputfile):
    print(inputfile, outputfile)
    inputDf = pd.read_csv(inputfile)
    #print(inputDf)
    outputDf = pd.DataFrame()
    print("Will attempt to use function parameters as filenames, working...")
    outputDf = goQuery2(inputDf)
    #print(outputDf)
    outputDf.to_csv(outputfile)
    print("Exported to", outputfile)
    
def exportTable(inputDf, outputfile):
    print("will export to", outputfile)
    #print("input data:", inputDf)
    print("Will attempt to use function parameter as inputDf, output filename, working...")
    #print(outputDf)
    inputDf.to_csv(outputfile)
    print("Exported to", outputfile)

def goQuery1(inputDf):
    
    print("\n\nQUERY 1 \n\ninputDf", inputDf, "output")

    #print("inputDf is a ", type(inputDf))
    # pandas filtering. 
    
    # query 2 has 6 parts:
    # 1. straight line trials
    # 2. no blocks
    # 3. at least twenty strides
    # 4. VS > 8.5 (absolute value)
    # 5. diffMIN pelvis >3 (absolute value)
    # 6. sign of diffminpelvis same as sign of diffminhead
    # this is ipsilateral? If memory serves
    
    # 1. straight lines (can be done in sql but moving to python)
    straightlineFilter = inputDf["Trial"] == "Straight Line"
    
    # 2. no blocks
    inputDf = inputDf[inputDf['Blocks'].isnull()]
    
    # 3. at least twenty strides 
    # not sure if this is the correct column. some combo of Fore Strides, Hind Strides?
    foreStrideFilter = inputDf["Fore Strides"] >= 20
    hindStrideFilter = inputDf["Hind Strides"] >= 20
    
    # 4. VS > 8.5 (absolute value). So |vectorsum| > 8.5, or (vectorsum < -8.5 or > 8.5)
    vectorPosFilter = inputDf["Fore Signed Vector Sum"] > 8.5
    vectorNegFilter = inputDf["Fore Signed Vector Sum"] < -8.5
    
    # 5. diffmin pelvis >3 (absolute value)
    hinddiffmaxmeanPosFilter = inputDf["Hind Diff Min Mean"] > 3
    hinddiffmaxmeanNegFilter = inputDf["Hind Diff Min Mean"] < -3
    
    # 6. diffminpelvis same sign as diffminhead. 
    # 'Hind Diff Min Mean' 'Fore Diff Min Mean'
    samesignFilter = inputDf["Hind Diff Min Mean"] * inputDf["Fore Diff Min Mean"] > 0
    
    #print("before where\n\n", inputDf)
    
    #step 1 thru 3 filter
    inputDf.where(straightlineFilter & foreStrideFilter, inplace=True)
    #step 4 vector sum filter
    inputDf.where(vectorPosFilter | vectorNegFilter, inplace=True)
    #step 5 diffmaxmeanfilter
    inputDf.where(hinddiffmaxmeanPosFilter | hinddiffmaxmeanNegFilter, inplace=True)
    #step 6 same sign filter
    inputDf.where(samesignFilter, inplace=True)
    
    #print("inputDf is a ", type(inputDf))   
    #print("after where\n\n", inputDf)
    inputDf.dropna(how="all", inplace=True)
    print("\n\nQUERY 1 after dropna (finished filtering)\n\n", inputDf)
    
    #print("inputDf is a ", type(inputDf))
    
    return inputDf

def goQuery2(inputDf):
    
    print("\n\nQUERY 2 \n\ninputDf", inputDf)

    #print("inputDf is a ", type(inputDf))
    # pandas filtering. 
    
    # query 2 has 6 parts:
    # 1. straight line trials
    # 2. no blocks
    # 3. at least twenty strides
    # 4. VS > 8.5 (absolute value)
    # 5. diffmax pelvis >3 (absolute value)
    # 6. sign of diffmaxpelvis same as sign of diffminhead
    # this is ipsilateral? If memory serves
    
    # 1. straight lines (can be done in sql but moving to python)
    straightlineFilter = inputDf["Trial"] == "Straight Line"
    
    # 2. no blocks
    inputDf = inputDf[inputDf['Blocks'].isnull()]
    
    # 3. at least twenty strides 
    # not sure if this is the correct column. some combo of Fore Strides, Hind Strides?
    foreStrideFilter = inputDf["Fore Strides"] >= 20
    hindStrideFilter = inputDf["Hind Strides"] >= 20
    
    # 4. VS > 8.5 (absolute value). So |vectorsum| > 8.5, or (vectorsum < -8.5 or > 8.5)
    vectorPosFilter = inputDf["Fore Signed Vector Sum"] > 8.5
    vectorNegFilter = inputDf["Fore Signed Vector Sum"] < -8.5
    
    # 5. diffmax pelvis >3 (absolute value)
    hinddiffmaxmeanPosFilter = inputDf["Hind Diff Max Mean"] > 3
    hinddiffmaxmeanNegFilter = inputDf["Hind Diff Max Mean"] < -3
    
    # 6. diffmaxpelvis same sign as diffminhead. 
    # 'Hind Diff Max Mean' 'Fore Diff Min Mean'
    samesignFilter = inputDf["Hind Diff Max Mean"] * inputDf["Fore Diff Min Mean"] > 0
    
    #print("before where\n\n", inputDf)
    
    #step 1 thru 3 filter
    inputDf.where(straightlineFilter & foreStrideFilter & hindStrideFilter, inplace=True)
    #step 4 vector sum filter
    inputDf.where(vectorPosFilter | vectorNegFilter, inplace=True)
    #step 5 diffmaxmeanfilter
    inputDf.where(hinddiffmaxmeanPosFilter | hinddiffmaxmeanNegFilter, inplace=True)
    #step 6 same sign filter
    inputDf.where(samesignFilter, inplace=True)
    
    #print("inputDf is a ", type(inputDf))   
    #print("after where\n\n", inputDf)
    inputDf.dropna(how="all", inplace=True)
    print("\n\nQUERY 2 after dropna (finished filtering)\n\n", inputDf)
    
    #print("inputDf is a ", type(inputDf))
  
    return inputDf

def filterTable(df, column, operator, value):
    print("\n\nfilter table activated\n\n")
    print(column, operator, value)
    #the conditional operators: (>, <, >=, <=, ==, !=)
    #also, for absolute value there will be more
    if (value == "Null"):
        df = df[df[column].isnull()]
        print(df[column])
    else:
        if (operator == "=="):
            tableFilter = df[column] == value
        elif (operator == ">"):
            tableFilter = df[column] > value
        elif (operator == "<"):
            tableFilter = df[column] < value
        elif (operator == ">="):
            tableFilter = df[column] >= value
        elif (operator == "<="):
            tableFilter = df[column] <= value
        elif (operator == "!="):
            tableFilter = df[column] != value
        else:
            errorstring = "Operator not valid and will cause tableFilter reference before assignment"
            raise ValueError(errorstring)  
                 
        df.where(tableFilter, inplace=True)
    df.dropna(how="all", inplace=True)
    
    return df
                    
def main():
    print("printed from main")
    #create parser
    parser = argparse.ArgumentParser()
    
    #add arguments to the parser
    parser.add_argument("inputfile")
    parser.add_argument("outputfile")
    
    args = parser.parse_args()
    
    inputDf = pd.read_csv(args.inputfile)
    #print(inputDf)
    outputDf = pd.DataFrame()
    
    #ANALYSIS MEASUREMENT: vectorSum (type1), diffMinHead (diffMinMean type1), diffMinPelvis (diffMinMean type2), diffMaxMean (type2), diffMinStdDev (type2),
    #TRIALhorseID, idGuid, trialPattern, id, 
    #HORSE id (horse), name (name), idGuid, 
    #OWNER id, firstName, lastName, idGuid, 
    #PERSON id, lastName, idGuid
    
    print("Will attempt to use arguments as filenames, working...")
    outputDf = goQuery(inputDf, outputDf)
 
    outputDf.to_csv(args.outputfile)
    print("Exported to", args.outputfile)
 
if __name__ == "__main__":
    main()
